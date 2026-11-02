import http from 'node:http';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'public');
try {
  for (const line of readFileSync(join(fileURLToPath(new URL('.', import.meta.url)), '.env'), 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (match && process.env[match[1]] === undefined) process.env[match[1]] = match[2].replace(/^(["'])(.*)\1$/, '$2');
  }
} catch {}
const port = Number(process.env.PORT || 3000);
const ollamaHost = (process.env.OLLAMA_HOST || 'http://127.0.0.1:11434').replace(/\/$/, '');
const ollamaModel = process.env.OLLAMA_MODEL || 'qwen2.5:3b';
const geminiModel = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png' };

async function ollamaStatus() {
  try {
    const response = await fetch(`${ollamaHost}/api/tags`, { signal: AbortSignal.timeout(1000) });
    if (!response.ok) return false;
    const data = await response.json();
    return (data.models || []).some(model => model.name === ollamaModel || model.name?.startsWith(`${ollamaModel}:`));
  } catch { return false; }
}

const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');

  if (req.url === '/ads.txt') {
    const pubId = process.env.ADSENSE_PUBLISHER_ID || 'pub-0000000000000000';
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    res.end(`google.com, ${pubId.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);
    return;
  }
  if (req.url === '/api/generate-from-pdf' && req.method === 'POST') {
    try {
      let raw=''; for await (const part of req) { raw += part; if (raw.length > 150000) throw new Error('PDF text payload too large.'); }
      const { text, subject, count } = JSON.parse(raw);
      if (typeof text !== 'string' || text.trim().length < 20) throw new Error('Provide extracted PDF text (at least 20 characters).');
      const numQ = Math.min(20, Math.max(3, Number(count) || 8));
      const prompt = `You are MechPrep Arena's Question Paper (QP) and Study Guide generator. Based on the following engineering/aptitude syllabus or PDF text, return ONLY valid JSON with keys:
"title" (string),
"guide" (object with keys: "title", "idea", "formula", "example", "method", "trap"),
"questions" (array of ${numQ} objects, each with keys: "topic" (string), "difficulty" ("Basic"|"Intermediate"|"Advanced"), "text" (string question), "options" (array of 4 strings), "answer" (integer 0-3), "explain" (step-by-step worked solution), "weightClass" ("short"|"problem")).
Subject focus: ${String(subject || 'Mechanical Engineering').slice(0, 80)}
Source PDF text:
${text.slice(0, 12000)}`;
      let replyText = '';
      if (process.env.GEMINI_API_KEY) {
        const payload = { contents:[{role:'user',parts:[{text:prompt}]}], generationConfig:{temperature:0.25,maxOutputTokens:3000,responseMimeType:'application/json'} };
        const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(geminiModel)}:generateContent`, { method:'POST', headers:{'x-goog-api-key':process.env.GEMINI_API_KEY,'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:AbortSignal.timeout(90000) });
        const data = await upstream.json();
        if (!upstream.ok) throw new Error(data.error?.message || 'Gemini generation failed');
        replyText = (data.candidates?.[0]?.content?.parts || []).map(p=>p.text||'').join('\n').trim();
      } else {
        const payload = { model:ollamaModel, stream:false, format:'json', messages:[{role:'user',content:prompt}] };
        const upstream = await fetch(`${ollamaHost}/api/chat`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:AbortSignal.timeout(120000) });
        const data = await upstream.json();
        if (!upstream.ok) throw new Error(data.error || 'Local AI generation failed');
        replyText = data.message?.content || '';
      }
      const parsed = JSON.parse(replyText.replace(/^```json\s*|\s*```$/g, ''));
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(parsed));
    } catch (e) {
      res.writeHead(502, {'Content-Type':'application/json'});
      res.end(JSON.stringify({error: e.message || 'Server AI unavailable, using client generator.'}));
    }
    return;
  }

  if (req.url === '/api/health') {
    const localAI = await ollamaStatus();
    const geminiConfigured = Boolean(process.env.GEMINI_API_KEY);
    res.writeHead(200, {'Content-Type':'application/json'}); res.end(JSON.stringify({ok:true, aiAvailable:localAI||geminiConfigured, geminiConfigured, localAI, model:geminiConfigured?geminiModel:ollamaModel})); return;
  }
  if (req.url === '/api/tutor' && req.method === 'POST') {
    try {
      let raw=''; for await (const part of req) { raw += part; if (raw.length > 20000) throw new Error('Request too large.'); }
      const { question, topic } = JSON.parse(raw);
      if (typeof question !== 'string' || question.trim().length < 2 || question.length > 4000) throw new Error('Enter a question between 2 and 4,000 characters.');
      const system = 'You are MechPrep Arena, a patient mechanical engineering and aptitude tutor. Explain step by step, state assumptions and units, derive formulas where useful, check arithmetic, and identify common traps. Focus on Mechanical Engineering and General Aptitude; keep cross-core content brief.';
      let answer='';
      if (process.env.GEMINI_API_KEY) {
        const payload = { systemInstruction:{parts:[{text:system}]}, contents:[{role:'user',parts:[{text:`Study area: ${String(topic || 'Mechanical Engineering').slice(0,120)}\nStudent question: ${question.trim()}`}]}], generationConfig:{temperature:0.25,maxOutputTokens:1400} };
        const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(geminiModel)}:generateContent`, { method:'POST', headers:{'x-goog-api-key':process.env.GEMINI_API_KEY,'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:AbortSignal.timeout(90000) });
        const data = await upstream.json();
        if (!upstream.ok) throw new Error(data.error?.message || `Gemini request failed (${upstream.status}).`);
        answer = (data.candidates?.[0]?.content?.parts || []).map(part=>part.text||'').join('\n').trim();
      } else {
        const payload = { model:ollamaModel, stream:false, messages:[{role:'system',content:system},{role:'user',content:`Study area: ${String(topic || 'Mechanical Engineering').slice(0,120)}\nStudent question: ${question.trim()}`}] };
        const upstream = await fetch(`${ollamaHost}/api/chat`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:AbortSignal.timeout(120000) });
        const data = await upstream.json();
        if (!upstream.ok) throw new Error(data.error || `Local AI request failed (${upstream.status}).`);
        answer = data.message?.content || '';
      }
      res.writeHead(200, {'Content-Type':'application/json'}); res.end(JSON.stringify({answer:answer || 'No text response was returned.'}));
    } catch (e) { const status=e.name==='AbortError'||e.name==='TimeoutError'?504:(e.cause?.code==='ECONNREFUSED'?503:(e.message?.includes('API_KEY')?401:502));res.writeHead(status, {'Content-Type':'application/json'}); res.end(JSON.stringify({error:e.message || 'Could not process request.'})); }
    return;
  }
  const pathname = decodeURIComponent((req.url || '/').split('?')[0]);
  const file = normalize(join(root, pathname === '/' ? 'index.html' : pathname));
  if (!file.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  try { const data = await readFile(file); res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream'}); res.end(data); }
  catch { res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); res.end('Not found'); }
});

server.listen(port, '0.0.0.0', () => console.log(`MechPrep Arena is ready at http://localhost:${port}`));
