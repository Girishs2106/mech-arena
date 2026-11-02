const authoredQuestions = [
  {role:'CAD / Design',difficulty:'Basic',topic:'Strength of Materials',text:'A 10 kN tensile force acts on a bar with a cross-sectional area of 200 mm². What is the normal stress?',options:['5 MPa','50 MPa','500 MPa','2,000 MPa'],answer:1,explain:'σ = F/A = 10,000 N / 200 mm² = 50 N/mm² = 50 MPa.'},
  {role:'Mixed Mechanical + Aptitude',difficulty:'Basic',topic:'Aptitude',text:'A machine produces 120 parts in 4 hours. At the same rate, how many parts will it produce in 7 hours?',options:['180','200','210','240'],answer:2,explain:'Rate = 120/4 = 30 parts per hour. In 7 hours: 30 × 7 = 210 parts.'},
  {role:'CAE / Analysis',difficulty:'Intermediate',topic:'Strength of Materials',text:'A simply supported beam of span L has a point load P at its center. Which expression gives its maximum bending moment?',options:['PL/2','PL/4','PL/8','P/L'],answer:1,explain:'Each support reaction is P/2; at mid-span, Mmax = (P/2)(L/2) = PL/4.'},
  {role:'Manufacturing',difficulty:'Intermediate',topic:'Manufacturing',text:'A 50 mm diameter workpiece rotates at 600 rpm. Approximately what is its cutting speed?',options:['47.1 m/min','94.2 m/min','188.5 m/min','300 m/min'],answer:1,explain:'V = πDN/1000 = π × 50 × 600 / 1000 ≈ 94.2 m/min.'},
  {role:'Maintenance / Utilities',difficulty:'Basic',topic:'Fluid Mechanics',text:'Water flows through a 0.01 m² pipe cross-section at 2 m/s. What is the volume flow rate?',options:['0.005 m³/s','0.02 m³/s','0.2 m³/s','2 m³/s'],answer:1,explain:'Q = A × v = 0.01 × 2 = 0.02 m³/s.'},
  {role:'Mixed Mechanical + Aptitude',difficulty:'Intermediate',topic:'Thermodynamics',text:'A closed system receives 500 J of heat and does 200 J of work. What is its change in internal energy?',options:['−700 J','−300 J','300 J','700 J'],answer:2,explain:'With work done by the system positive: ΔU = Q − W = 500 − 200 = 300 J.'},
  {role:'Quality / Metrology',difficulty:'Intermediate',topic:'Manufacturing',text:'A process has USL = 20.6 mm, LSL = 19.4 mm and standard deviation σ = 0.1 mm. What is Cp?',options:['1','2','4','6'],answer:1,explain:'Cp = (USL − LSL)/(6σ) = 1.2/0.6 = 2. Cp assumes a stable process and does not measure centering.'},
  {role:'CAD / Design',difficulty:'Advanced',topic:'Theory of Machines',text:'A 20-tooth gear rotating at 900 rpm drives a 60-tooth external gear. What is the driven gear speed and direction?',options:['150 rpm, same direction','300 rpm, opposite direction','300 rpm, same direction','2,700 rpm, opposite direction'],answer:1,explain:'N₁T₁ = N₂T₂, so N₂ = 900 × 20/60 = 300 rpm. External gears turn in opposite directions.'},
  {role:'CAE / Analysis',difficulty:'Advanced',topic:'Strength of Materials',text:'For a rectangular section of width b and depth h, what is its second moment of area about the centroidal horizontal axis?',options:['bh²/6','bh³/12','b²h/12','bh³/3'],answer:1,explain:'For a rectangle about its centroidal axis parallel to the width, I = bh³/12.'},
  {role:'Mixed Mechanical + Aptitude',difficulty:'Basic',topic:'Aptitude',text:'A pump costing ₹8,000 is discounted by 15%. What is the sale price?',options:['₹6,400','₹6,800','₹7,200','₹7,600'],answer:1,explain:'Discount = 0.15 × 8,000 = ₹1,200. Sale price = ₹6,800.'},
  {role:'CAD / Design',difficulty:'Intermediate',topic:'Strength of Materials',text:'A simply supported beam has a central load P = 2 kN, span L = 2 m, E = 200 GPa and I = 8×10⁻⁶ m⁴. Estimate its central deflection.',options:['0.21 mm','1.04 mm','2.08 mm','4.17 mm'],answer:0,explain:'δ = PL³/(48EI) = 2000×8/(48×200×10⁹×8×10⁻⁶) ≈ 0.000208 m = 0.208 mm, or about 0.21 mm.'},
  {role:'Quality / Metrology',difficulty:'Basic',topic:'Manufacturing',text:'Which instrument is generally best suited to measure the outside diameter of a shaft accurately?',options:['Steel rule','Outside micrometer','Protractor','Feeler gauge'],answer:1,explain:'An outside micrometer measures external dimensions such as shaft diameter with high precision.'},
  {role:'Mixed Mechanical + Aptitude',difficulty:'Basic',topic:'Engineering Mechanics',text:'A 3 kN force acts perpendicular to a 0.4 m lever arm. What moment does it create about the pivot?',options:['0.75 kN·m','1.2 kN·m','3.4 kN·m','7.5 kN·m'],answer:1,explain:'M = Fd⊥ = 3 × 0.4 = 1.2 kN·m.'},
  {role:'CAD / Design',difficulty:'Basic',topic:'Strength of Materials',text:'A 1 m long steel rod (A = 100 mm², E = 200 GPa) carries 10 kN in tension. Find its elongation.',options:['0.05 mm','0.5 mm','5 mm','50 mm'],answer:1,explain:'δ = FL/(AE) = 10,000×1,000/(100×200,000) = 0.5 mm when N and mm are used.'},
  {role:'Maintenance / Utilities',difficulty:'Basic',topic:'Thermodynamics',text:'For an ideal gas in a closed, isothermal process, the internal-energy change is:',options:['Positive','Negative','Zero','Equal to the boundary work'],answer:2,explain:'For an ideal gas, internal energy depends only on temperature. Isothermal means ΔT=0, so ΔU=0.'},
  {role:'CAE / Analysis',difficulty:'Intermediate',topic:'Strength of Materials',text:'A solid circular shaft transmits 1 kN·m torque. If its diameter is 50 mm, what is the maximum shear stress?',options:['20.4 MPa','40.7 MPa','81.5 MPa','163 MPa'],answer:1,explain:'τmax = 16T/(πd³) = 16×10⁶/(π×50³) ≈ 40.7 MPa.'},
  {role:'CAE / Analysis',difficulty:'Intermediate',topic:'Strength of Materials',text:'A rectangular beam section has width 40 mm and depth 80 mm. What is I about its centroidal axis parallel to the width?',options:['1.71×10⁵ mm⁴','1.71×10⁶ mm⁴','3.41×10⁶ mm⁴','6.83×10⁶ mm⁴'],answer:1,explain:'I=bh³/12=40×80³/12=1.707×10⁶ mm⁴.'},
  {role:'CAD / Design',difficulty:'Intermediate',topic:'Theory of Machines',text:'An external gear with 24 teeth at 600 rpm drives a 72-tooth gear. What is the output speed?',options:['200 rpm, opposite direction','200 rpm, same direction','1,800 rpm, opposite direction','1,800 rpm, same direction'],answer:0,explain:'N₂=N₁T₁/T₂=600×24/72=200 rpm. A single external mesh reverses direction.'},
  {role:'Maintenance / Utilities',difficulty:'Intermediate',topic:'Fluid Mechanics',text:'Water flows at 1.5 m/s through a 40 mm diameter pipe. Use ρ=1000 kg/m³ and μ=0.001 Pa·s. Find Reynolds number.',options:['6,000','30,000','60,000','600,000'],answer:2,explain:'Re=ρVD/μ=1000×1.5×0.04/0.001=60,000.'},
  {role:'Manufacturing',difficulty:'Intermediate',topic:'Manufacturing',text:'A 100 mm workpiece is turned at a cutting speed of 157 m/min. Approximately what spindle speed is required?',options:['250 rpm','500 rpm','1,000 rpm','1,570 rpm'],answer:1,explain:'N=1000V/(πD)=157,000/(π×100)≈500 rpm.'},
  {role:'Quality / Metrology',difficulty:'Intermediate',topic:'Metrology',text:'A process has USL=52 mm, LSL=48 mm, mean=50.8 mm, and σ=0.5 mm. What is Cpk?',options:['0.8','1.2','1.33','2.67'],answer:0,explain:'Cpk=min[(52−50.8)/(3×0.5),(50.8−48)/(3×0.5)]=min(0.8,1.87)=0.8.'},
  {role:'Supply Chain / Production',difficulty:'Intermediate',topic:'Industrial Engineering',text:'Annual demand is 800 units, order cost ₹50/order and annual holding cost ₹2/unit. What is the EOQ?',options:['100 units','200 units','400 units','800 units'],answer:1,explain:'EOQ=√(2DS/H)=√(2×800×50/2)=√40,000=200 units.'},
  {role:'CAE / Analysis',difficulty:'Advanced',topic:'Strength of Materials',text:'A steel column (E=200 GPa, I=8×10⁻⁶ m⁴, L=2 m) is pin-ended. Estimate Euler critical load.',options:['0.395 MN','1.97 MN','3.95 MN','39.5 MN'],answer:2,explain:'Pcr=π²EI/L²=π²×200×10⁹×8×10⁻⁶/2²≈3.95 MN.'},
  {role:'CAD / Design',difficulty:'Advanced',topic:'Machine Design',text:'A ductile steel element has plane stresses σx=80 MPa, σy=0 and τxy=30 MPa. What is von Mises stress?',options:['80 MPa','95.4 MPa','103.9 MPa','140 MPa'],answer:1,explain:'σv=√(σx²−σxσy+σy²+3τ²)=√(6400+2700)=95.4 MPa.'},
  {role:'Maintenance / Utilities',difficulty:'Advanced',topic:'Thermodynamics',text:'An ideal Carnot engine operates between 800 K and 300 K reservoirs. What is its maximum thermal efficiency?',options:['37.5%','50.0%','62.5%','72.5%'],answer:2,explain:'ηmax=1−T_L/T_H=1−300/800=0.625=62.5%.'},
  {role:'Manufacturing',difficulty:'Advanced',topic:'Heat Transfer',text:'A plane wall has thickness 0.10 m, conductivity 0.5 W/(m·K), area 2 m² and a temperature difference of 50 K. Find steady conduction heat rate.',options:['250 W','500 W','750 W','1,000 W'],answer:1,explain:'Q̇=kAΔT/L=0.5×2×50/0.10=500 W.'},
  {role:'Mixed Mechanical + Aptitude',difficulty:'Basic',topic:'Cross-core Engineering Basics',text:'A 24 V DC motor draws 5 A at its terminals. What electrical input power does it receive?',options:['4.8 W','19 W','120 W','240 W'],answer:2,explain:'P=VI=24×5=120 W. Shaft output is lower if the motor has losses.'},
  {role:'CAE / Analysis',difficulty:'Advanced',topic:'Fluid Mechanics',text:'A pump delivers 0.02 m³/s of water through a head of 25 m at 80% efficiency. Estimate required input power. Use ρ=1000 kg/m³ and g=9.81 m/s².',options:['4.91 kW','6.13 kW','8.00 kW','12.3 kW'],answer:1,explain:'Hydraulic power=ρgQH=1000×9.81×0.02×25=4.905 kW. Input=4.905/0.80≈6.13 kW.'},
  {role:'Manufacturing',difficulty:'Basic',topic:'Manufacturing',text:'In orthogonal cutting, the cutting speed is 120 m/min and feed is 0.2 mm/rev. What is the feed speed at 500 rpm?',options:['10 mm/min','60 mm/min','100 mm/min','240 mm/min'],answer:2,explain:'Feed speed = feed per revolution × rpm = 0.2×500 = 100 mm/min.'},
  {role:'CAD / Design',difficulty:'Advanced',topic:'Machine Design',text:'A shaft is subjected to fully reversed bending. Which mean-stress value describes this idealized cycle?',options:['Zero','Equal to maximum stress','Half the stress amplitude','Infinite'],answer:0,explain:'For fully reversed loading, σmax=−σmin, so mean stress (σmax+σmin)/2=0 and alternating stress equals the peak magnitude.'},
  {role:'Quality / Metrology',difficulty:'Basic',topic:'Metrology',text:'A micrometer has a 0.5 mm screw pitch and 50 divisions on its thimble. What is its least count?',options:['0.001 mm','0.01 mm','0.1 mm','1 mm'],answer:1,explain:'Least count = pitch/divisions = 0.5/50 = 0.01 mm.'}
];
const importedQuestions = window.MECHPREP_IMPORTED_QUESTIONS || [];
const generatedQuestions = (window.MECHPREP_GENERATED_QUESTIONS || []).concat(window.MECHPREP_GENERATED_QUESTIONS_V2 || [],window.MECHPREP_TRAIN_QUESTIONS || []);
const semester3Questions = window.MECHPREP_SEMESTER3_QUESTIONS || [];
let session = null, tick = null, selectedChapter = 'mechanics', tutorContext = null;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const guide = window.MECHPREP_GUIDE || [];
const stored = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
const historyItems = () => stored('mechprep-history', []); const apiEndpoint = p => p;

function safeHtml(raw) {
  const doc = new DOMParser().parseFromString(String(raw ?? ''), 'text/html');
  const allowed = new Set(['p','br','b','strong','i','em','sub','sup','ul','ol','li','table','tbody','thead','tr','td','th']);
  const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const render = node => {
    if (node.nodeType === 3) return escape(node.nodeValue);
    if (node.nodeType !== 1) return '';
    const tag = node.tagName.toLowerCase();
    if (tag === 'img') {
      const src = node.getAttribute('src') || '';
      if (/^data:image\/(png|jpeg|gif|webp);base64,[a-z0-9+/=\s]+$/i.test(src) && src.length < 850000) return `<img class="source-question-image" alt="Figure from supplied question bank" src="${src.replace(/\s/g,'')}">`;
      return '<span class="source-figure-missing">[Figure unavailable in offline archive]</span>';
    }
    const children = [...node.childNodes].map(render).join('');
    if (!allowed.has(tag)) return children;
    if (tag === 'br') return '<br>';
    let attrs = '';
    if (['td','th'].includes(tag)) for (const a of ['colspan','rowspan']) { const v = node.getAttribute(a); if (v && /^\d{1,2}$/.test(v)) attrs += ` ${a}="${v}"`; }
    return `<${tag}${attrs}>${children}</${tag}>`;
  };
  return [...doc.body.childNodes].map(render).join('');
}

function updateStats() {
  const h = historyItems();
  $('#attempt-count').textContent = h.length; $('#progress-count').textContent = h.length;
  $('#best-score').textContent = h.length ? `${Math.max(...h.map(x => x.score))}%` : '—';
  $('#progress-best').textContent = h.length ? `${Math.max(...h.map(x => x.score))}%` : '—';
  $('#average-score').textContent = h.length ? `${Math.round(h.reduce((s,x)=>s+x.score,0)/h.length)}%` : '—';
  drawChart(h);
  drawQuestionHistory(h);
}
function saveHistory(item) { const h = historyItems(); h.push(item); localStorage.setItem('mechprep-history', JSON.stringify(h)); updateStats(); }
function questionWeightClass(q){if(q.weightClass)return q.weightClass;if(q.kind==='numeric')return 'short';const t=q.text||'';if(/\b(find|calculate|compute|estimate|determine|how many|how much|what is the value|what is the speed|what is the stress|what is the pressure|what is the power)\b/i.test(t))return 'problem';return /\d/.test(t)&&/\b(stress|strain|elongation|extension|deflection|moment|torque|speed|velocity|pressure|power|flow rate|discharge|heat rate|efficiency|distance|reaction|load|least count|eoq|productivity|reynolds|work|energy|modulus)\b/i.test(t)?'problem':'short'}
function pointsFor(q){return Number(session.weights[questionWeightClass(q)]||2)}
function accountQuestionTime(){if(!session?.questionStartedAt)return;const now=Date.now();session.questionTimes[session.index]+=(now-session.questionStartedAt)/1000;session.questionStartedAt=now}
function gotoQuestion(i){accountQuestionTime();session.index=i;session.questionStartedAt=Date.now();renderQuestion()}
function goPage(name) { $$('.page').forEach(p=>p.classList.toggle('active',p.id===name)); $$('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.page===name)); window.scrollTo({top:0,behavior:'smooth'}); if(name==='progress')updateStats(); if(name==='guide')renderGuide(); }
$$('[data-page]').forEach(b=>b.addEventListener('click',()=>goPage(b.dataset.page)));

function customQuestionsList() { return stored('mechprep-custom-questions', []); }
function aptitudePool(difficulty) { return customQuestionsList().filter(q=>q.category==='aptitude'&&(!difficulty||q.difficulty===difficulty)).concat(importedQuestions,generatedQuestions.filter(q=>q.category==='aptitude'),authoredQuestions.filter(q=>q.topic==='Aptitude')).filter(q=>q.difficulty===difficulty); }
function mechanicalPool(difficulty) { return customQuestionsList().filter(q=>q.category!=='aptitude'&&(!difficulty||q.difficulty===difficulty)).concat(authoredQuestions.filter(q=>q.difficulty===difficulty && q.topic!=='Aptitude'),generatedQuestions.filter(q=>q.category==='mechanical'&&q.difficulty===difficulty)); }
function shuffled(list) { return [...list].sort(()=>Math.random()-.5); }
let savedTechShare=80,previousMixRole=$('#role').value;
function updateMixControl(){const role=$('#role').value,range=$('#tech-percent'),label=$('#mix-value'),fixed=role==='Mechanical Core'||role==='Semester 3 Course Pack'||role==='General Aptitude';if(fixed&&!['Mechanical Core','Semester 3 Course Pack','General Aptitude'].includes(previousMixRole))savedTechShare=Number(range.value);range.disabled=fixed;if(role==='Mechanical Core'||role==='Semester 3 Course Pack'){range.value='100';label.textContent='100% Technical · 0% Aptitude (fixed for this focus)'}else if(role==='General Aptitude'){range.value='0';label.textContent='0% Technical · 100% Aptitude (fixed for this focus)'}else{range.value=String(savedTechShare);const tech=Number(range.value);label.textContent=`${tech}% Technical · ${100-tech}% Aptitude`}previousMixRole=role}
$('#tech-percent').addEventListener('input',()=>{savedTechShare=Number($('#tech-percent').value);updateMixControl()});$('#role').addEventListener('change',updateMixControl);updateMixControl();
function begin() {
  const difficulty=$('#difficulty').value, role=$('#role').value;
  let mech=mechanicalPool(difficulty), apt=aptitudePool(difficulty);
  const requested=Number($('#count').value); let pool;
  if(role==='Uploaded PDF Pack') { const cq = customQuestionsList(); pool=shuffled(cq.length ? cq : semester3Questions).slice(0,requested); }
  else if(role==='Semester 3 Course Pack') pool=shuffled(semester3Questions).slice(0,requested);
  else if(role==='General Aptitude') pool=shuffled(apt).slice(0,requested);
  else if(role==='Mechanical Core') pool=shuffled(mech).slice(0,requested);
  else {
    let focused=role==='Mechanical + Aptitude'?mech:mech.filter(q=>q.role===role);
    const aptitudeShare=100-Number($('#tech-percent').value);
    const aptCount=Math.min(apt.length,Math.round(requested*aptitudeShare/100));
    const mechCount=requested-aptCount;
    pool=shuffled(focused).slice(0,mechCount);
    if(pool.length<mechCount)pool=pool.concat(shuffled(mech.filter(q=>!pool.includes(q))).slice(0,mechCount-pool.length));
    pool=pool.concat(shuffled(apt).slice(0,aptCount));
    pool=shuffled(pool);
  }
  if(pool.length<requested&&role!=='Semester 3 Course Pack')pool=pool.concat(shuffled(authoredQuestions.filter(q=>q.difficulty===difficulty&&!pool.includes(q)))).slice(0,requested);
  if(!pool.length)pool=shuffled(authoredQuestions);
  const items=pool.slice(0,Math.min(requested,pool.length));
  session={items,answers:Array(items.length).fill(null),flags:Array(items.length).fill(false),questionTimes:Array(items.length).fill(0),questionStartedAt:Date.now(),index:0,seconds:Number($('#minutes').value)*60,role,weights:{short:Number($('#short-marks').value),problem:Number($('#problem-marks').value)}};
  $('#exam-title').textContent=`${role} · ${difficulty}`; goPage('exam'); renderQuestion();
  if(document.documentElement.requestFullscreen)document.documentElement.requestFullscreen().catch(()=>{});
  clearInterval(tick); tick=setInterval(()=>{session.seconds--;clock();if(session.seconds<=0){clearInterval(tick);finish(true)}},1000);clock();
}
function clock(){const s=session.seconds;$('#timer').textContent=`${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;$('#timer').classList.toggle('urgent',s<60)}
function renderQuestion() {
  const q=session.items[session.index];
  $('#q-position').textContent=`QUESTION ${session.index+1} OF ${session.items.length}`; $('#q-difficulty').textContent=`${q.difficulty} · ${pointsFor(q)} marks`;
  $('#question-content').innerHTML=`<h2>${safeHtml(q.text)}</h2><button id="question-tip" type="button" class="question-topic-link">▣ ${safeHtml(q.topic||'Related concept')} tips</button><div id="question-tip-content" class="inline-hint hidden">${safeHtml(q.trick||offlineHint(q))}${q.source?`\n\nSource: ${safeHtml(q.source)}`:''}</div>${q.sourceTest?`<div class="source-label">Imported aptitude · ${safeHtml(q.sourceTest)}</div>`:''}`;
  $('#question-tip').onclick=()=>$('#question-tip-content').classList.toggle('hidden');
  if(q.kind==='numeric') $('#choices').innerHTML=`<label class="numeric-answer">Your numeric answer<input id="numeric-answer" type="text" inputmode="decimal" placeholder="Type a number" value="${session.answers[session.index]??''}"></label>`;
  else $('#choices').innerHTML=(q.options||[]).map((o,i)=>`<label class="choice ${session.answers[session.index]===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${session.answers[session.index]===i?'checked':''}><span>${String.fromCharCode(65+i)}. &nbsp;${safeHtml(o)}</span></label>`).join('');
  $$('.choice input').forEach(r=>r.addEventListener('change',()=>{session.answers[session.index]=Number(r.value);renderQuestion()}));
  const numeric=$('#numeric-answer'); if(numeric)numeric.addEventListener('input',()=>{session.answers[session.index]=numeric.value});
  $('#review').textContent=session.flags[session.index]?'★ Marked for review':'☆ Mark for review'; $('#review').classList.toggle('flag-on',session.flags[session.index]);
  $('#previous').disabled=session.index===0; $('#next').textContent=session.index===session.items.length-1?'Finish test':'Next →';
  $('#question-map').innerHTML=session.items.map((_,i)=>`<button class="${i===session.index?'current':''} ${session.answers[i]!==null&&session.answers[i]!==''?'answered':''} ${session.flags[i]?'flagged':''}" data-i="${i}">${i+1}</button>`).join('');
  $$('#question-map button').forEach(b=>b.onclick=()=>gotoQuestion(Number(b.dataset.i)));
}
$('#start').onclick=begin;
$('#review').onclick=()=>{session.flags[session.index]=!session.flags[session.index];renderQuestion()};
$('#previous').onclick=()=>{if(session.index)gotoQuestion(session.index-1)};
$('#next').onclick=()=>{if(session.index<session.items.length-1)gotoQuestion(session.index+1);else askSubmit()};
$('#return-test').onclick=()=>$('#submit-modal').classList.add('hidden'); $('#submit-anyway').onclick=()=>{$('#submit-modal').classList.add('hidden');finish(false)};
function askSubmit(){const unanswered=session.answers.map((a,i)=>a===null||a===''?i+1:null).filter(Boolean),flagged=session.flags.map((f,i)=>f?i+1:null).filter(Boolean);let html=unanswered.length?`<b>⚠ INCOMPLETE — unanswered question${unanswered.length>1?'s':''}: ${unanswered.join(', ')}</b>`:'<b>All questions have an answer.</b>';if(flagged.length)html+=`<br><br><b>Marked for review: ${flagged.join(', ')}</b>`;$('#incomplete-warning').innerHTML=html;$('#incomplete-warning').classList.toggle('hidden',!unanswered.length&&!flagged.length);$('#submit-modal').classList.remove('hidden')}
function numericCorrect(q,answer){if(answer===null||answer==='')return false;const value=Number(String(answer).replace(/,/g,''));if(!Number.isFinite(value))return false;const raw=q.answerText||'';const range=raw.match(/\(\s*(-?[\d.]+)\s*[-–]\s*(-?[\d.]+)\s*\)/);if(range)return value>=Number(range[1])&&value<=Number(range[2]);const expected=Number(raw.replace(/,/g,'').match(/-?\d+(?:\.\d+)?/)?.[0]);return Number.isFinite(expected)&&Math.abs(value-expected)<=Math.max(.001,Math.abs(expected)*.001)}
function questionCorrect(q,answer){return q.kind==='numeric'?numericCorrect(q,answer):answer===q.answer}
function guideForQuestion(q){const hay=(q.topic||'')+' '+(q.text||'');return guide.find(g=>hay.toLowerCase().includes(g.name.toLowerCase().split(' ')[0]))||guide.find(g=>g.id==='aptitude')||guide[0]}
function sourceForQuestion(q){if(q.sourceTest)return `${q.sourceTest} · filtered from the user-provided MadeEasy archive`;if(q.source)return q.source;const t=(q.topic||'').toLowerCase();if(t.includes('strength')||t.includes('beam'))return 'Strength of Materials 50 Aptitude Questions, supplied PDF';if(t.includes('thermo'))return 'Thermodynamics, supplied PDF';if(t.includes('fluid'))return 'Fluid_Mechanics, supplied PDF';if(t.includes('manufactur'))return 'Manufacturing_Process_Aptitude_Test, supplied PDF';if(t.includes('machine design')||t.includes('theory of machines'))return 'Machine_Design_Aptitude_Test, supplied PDF';if(t.includes('industrial')||t.includes('metrology'))return 'Industrial Engineering / Manufacturing supplied PDFs';if(t.includes('aptitude'))return 'Student Handout V3 (6) and QA & LR Trainer Handout V3';return 'MechPrep original study notes and supplied handout topic coverage'}
function offlineHint(q){const g=guideForQuestion(q);return `${g.name}\n\nStart here: ${g.idea}\n\nUseful relationship: ${g.formula}\n\nHow to approach it: ${g.derive}\n\nShortcut: ${g.trick}\n\nCheck: ${g.pitfall}`}
function visualExplanation(q){
  const topic=(q.topic||'').toLowerCase(),text=(q.text||'').toLowerCase();
  if(/train|platform|pole|tunnel/.test(topic+' '+text))return `<svg viewBox="0 0 620 150" role="img" aria-label="Animated train length and distance diagram"><line x1="20" y1="116" x2="600" y2="116" stroke="#7e8b82" stroke-width="3"/><line x1="455" y1="35" x2="455" y2="115" stroke="#d87543" stroke-width="7"/><text x="425" y="25" fill="#52675a" font-size="13">pole / platform edge</text><g class="move-train"><rect x="55" y="56" width="170" height="53" rx="10" fill="#2c684e"/><rect x="76" y="65" width="35" height="17" rx="3" fill="#dfece1"/><rect x="119" y="65" width="35" height="17" rx="3" fill="#dfece1"/><rect x="162" y="65" width="35" height="17" rx="3" fill="#dfece1"/><circle cx="92" cy="111" r="10" fill="#263b30"/><circle cx="186" cy="111" r="10" fill="#263b30"/><animateTransform attributeName="transform" type="translate" from="0 0" to="220 0" dur="4s" begin="indefinite" repeatCount="indefinite"/></g><line x1="57" y1="137" x2="225" y2="137" stroke="#d87543" stroke-width="2" marker-end="url(#arrow)"/><text x="90" y="148" fill="#52675a" font-size="12">train length L</text><text x="280" y="77" fill="#2c684e" font-size="14">distance cleared = L (pole)</text><text x="280" y="99" fill="#2c684e" font-size="14">distance cleared = L + platform length</text><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#d87543"/></marker></defs></svg><p class="visual-caption">Distance = relative speed × time. Passing a point uses L; passing a platform uses L + platform length.</p>`;
  if(/percent|discount|increase|decrease/.test(topic+' '+text))return `<svg viewBox="0 0 620 150" role="img" aria-label="Percentage change visual"><text x="26" y="32" fill="#52675a" font-size="14">Starting value</text><rect x="26" y="48" width="240" height="30" rx="6" fill="#2c684e"/><text x="26" y="113" fill="#52675a" font-size="13">Apply each percentage to the new base</text><rect x="290" y="48" width="120" height="30" rx="6" fill="#9bbd9e"/><text x="420" y="69" fill="#52675a" font-size="14">×(1+a)×(1+b)</text><path d="M270 63 H285" stroke="#d87543" stroke-width="3" class="flow-dash"/></svg><p class="visual-caption">Successive change: multiply the factors; do not add percentages with different bases.</p>`;
  if(/work|time|together|pipe/.test(topic+' '+text))return `<svg viewBox="0 0 620 150" role="img" aria-label="Work-rate diagram"><text x="24" y="34" fill="#52675a" font-size="14">Worker / inlet A</text><rect x="24" y="48" width="200" height="24" rx="5" fill="#9bbd9e"/><text x="24" y="105" fill="#52675a" font-size="14">Worker / inlet B</text><rect x="24" y="118" width="120" height="20" rx="5" fill="#d87543"/><path d="M240 63 H355 M160 128 H355" stroke="#2c684e" stroke-width="3" stroke-dasharray="7 6" class="flow-dash"/><rect x="370" y="53" width="210" height="80" rx="12" fill="#eaf2e9"/><text x="405" y="86" fill="#234833" font-size="15">Add rates</text><text x="394" y="110" fill="#234833" font-size="13">time = total work / rate</text></svg><p class="visual-caption">Rates combine; time is the amount of work divided by the combined rate.</p>`;
  if(/gear|mechanism/.test(topic+' '+text))return `<svg viewBox="0 0 620 150" role="img" aria-label="Animated meshing gears diagram"><g class="rotor"><circle cx="170" cy="77" r="46" fill="#dfece1" stroke="#2c684e" stroke-width="12" stroke-dasharray="8 5"/><circle cx="170" cy="77" r="8" fill="#2c684e"/><path d="M170 77 L170 39" stroke="#d87543" stroke-width="5"/></g><g class="rotor rotor-second"><circle cx="270" cy="77" r="32" fill="#f8e9dd" stroke="#d87543" stroke-width="10" stroke-dasharray="7 4"/><circle cx="270" cy="77" r="6" fill="#d87543"/><path d="M270 77 L270 49" stroke="#2c684e" stroke-width="4"/></g><text x="350" y="56" fill="#234833" font-size="15">N₁Z₁ = N₂Z₂</text><text x="350" y="83" fill="#52675a" font-size="13">external mesh: opposite directions</text><text x="350" y="108" fill="#52675a" font-size="13">speed falls as driven teeth increase</text></svg><p class="visual-caption">Gear speed is inversely proportional to tooth count; one external mesh reverses direction.</p>`;
  if(/beam|stress|strain|moment|load|deflection/.test(topic+' '+text))return `<svg viewBox="0 0 620 150" role="img" aria-label="Animated simply supported beam with central load"><line x1="110" y1="86" x2="510" y2="86" stroke="#2c684e" stroke-width="12"/><path d="M130 95 L108 125 H152 Z M490 95 L468 125 H512 Z" fill="#9bbd9e"/><path d="M310 24 V66" stroke="#d87543" stroke-width="5" marker-end="url(#loadArrow)" class="flow-dash"/><text x="268" y="19" fill="#744b32" font-size="13">point load P</text><path d="M112 138 Q310 165 508 138" fill="none" stroke="#d87543" stroke-width="3" stroke-dasharray="7 5" class="flow-dash"/><text x="226" y="145" fill="#52675a" font-size="12">bending / deflection response</text><defs><marker id="loadArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#d87543"/></marker></defs></svg><p class="visual-caption">Draw supports and load first; then calculate reactions, internal moment, stress or deflection.</p>`;
  if(/fluid|flow|pump|pressure|reynolds/.test(topic+' '+text))return `<svg viewBox="0 0 620 150" role="img" aria-label="Pipe flow cross-section visual"><path d="M24 45 H250 L315 70 H596 M24 110 H250 L315 85 H596" fill="none" stroke="#2c684e" stroke-width="8"/><path d="M65 77 H205 M350 77 H520" stroke="#d87543" stroke-width="3" stroke-dasharray="9 7" class="flow-dash"/><text x="86" y="33" fill="#52675a" font-size="13">A₁, V₁</text><text x="395" y="60" fill="#52675a" font-size="13">A₂ smaller → V₂ larger</text><text x="88" y="138" fill="#52675a" font-size="13">Continuity: A₁V₁ = A₂V₂</text></svg><p class="visual-caption">Follow area, speed and pressure through the control volume before applying the energy equation.</p>`;
  return `<svg viewBox="0 0 620 150" role="img" aria-label="Step-by-step relationship visual"><rect x="25" y="42" width="155" height="62" rx="10" fill="#eaf2e9"/><text x="54" y="69" fill="#234833" font-size="14">Given values</text><text x="51" y="90" fill="#52675a" font-size="12">write units first</text><path d="M190 73 H265" stroke="#d87543" stroke-width="3" stroke-dasharray="8 6" class="flow-dash"/><rect x="275" y="42" width="145" height="62" rx="10" fill="#f7eadf"/><text x="310" y="69" fill="#744b32" font-size="14">Formula</text><text x="303" y="90" fill="#52675a" font-size="12">substitute carefully</text><path d="M430 73 H500" stroke="#2c684e" stroke-width="3" stroke-dasharray="8 6" class="flow-dash"/><rect x="510" y="42" width="90" height="62" rx="10" fill="#eaf2e9"/><text x="526" y="79" fill="#234833" font-size="14">Answer</text></svg><p class="visual-caption">Animated solution path: givens → relationship → substitution → answer check.</p>`;
}
function drawTopicBreakdown(items,correct){const groups={};items.forEach((q,i)=>{const key=q.topic||'Practice';(groups[key]??={total:0,right:0,marks:0,possible:0}).total++;groups[key].right+=correct[i]?1:0;groups[key].marks+=correct[i]?pointsFor(q):0;groups[key].possible+=pointsFor(q)});$('#topic-chart').innerHTML=Object.entries(groups).map(([name,x])=>{const pct=x.total?Math.round(x.right/x.total*100):0;return `<div class="topic-bar-row"><div><b>${safeHtml(name)}</b><span>${x.right}/${x.total} right · ${x.marks}/${x.possible} marks</span></div><div class="topic-bar"><i style="width:${pct}%"></i></div><strong>${pct}%</strong></div>`}).join('')||'<p>No topic scores for this test.</p>'}
function finish(expired) {
  clearInterval(tick); if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
  accountQuestionTime();
  const correct=session.items.map((q,i)=>questionCorrect(q,session.answers[i]));
  const count=correct.filter(Boolean).length,wrong=session.items.length-count;
  const possible=session.items.reduce((a,q)=>a+pointsFor(q),0),earned=session.items.reduce((a,q,i)=>a+(correct[i]?pointsFor(q):0),0),score=possible?Math.round(earned/possible*100):0;
  const qResults=session.items.map((q,i)=>({id:q.id||`Q${i+1}`,topic:q.topic||'Practice',text:q.text||'',source:sourceForQuestion(q),yourAnswer:q.kind==='numeric'?String(session.answers[i]??''):String(q.options?.[session.answers[i]]||''),correctAnswer:q.kind==='numeric'?String(q.answerText||''):String(q.options?.[q.answer]||''),correct:correct[i],answered:session.answers[i]!==null&&session.answers[i]!=='',earnedMarks:correct[i]?pointsFor(q):0,possibleMarks:pointsFor(q),seconds:Math.round(session.questionTimes[i]),flagged:session.flags[i]}));
  const avgSeconds=Math.round(session.questionTimes.reduce((a,b)=>a+b,0)/Math.max(1,session.items.length));
  saveHistory({date:new Date().toISOString(),score,earnedMarks:earned,possibleMarks:possible,correct:count,wrong,total:session.items.length,avgSeconds,questionResults:qResults});
  $('#result-title').textContent=expired?'Time is up':'Your results'; $('#result-copy').textContent=`${earned} / ${possible} marks · ${count} right · ${wrong} wrong · ${session.role}`; $('#score-value').textContent=`${earned}/${possible}`;$('#score-caption').textContent=`${score}% · ACCURACY BY MARKS`;
  const unanswered=session.answers.map((a,i)=>a===null||a===''?i+1:null).filter(Boolean); $('#incomplete-final').classList.toggle('hidden',!expired||!unanswered.length); $('#incomplete-final').innerHTML=expired&&unanswered.length?`<b>TIME EXPIRED — INCOMPLETE</b><br>Unanswered questions: ${unanswered.join(', ')}`:'';drawTopicBreakdown(session.items,correct);
  $('#answer-review').innerHTML=session.items.map((q,i)=>`<div class="review-row"><b>Q${i+1}. ${safeHtml(q.text)}</b><div class="question-result-meta"><span class="${correct[i]?'correct':'incorrect'}">${session.answers[i]===null||session.answers[i]===''?'Not answered':correct[i]?'RIGHT':'WRONG'}</span><span>${correct[i]?pointsFor(q):0} / ${pointsFor(q)} marks</span><span>⏱ ${Math.round(session.questionTimes[i])} sec</span>${session.flags[i]?'<span>Marked for review</span>':''}</div><p>${session.answers[i]===null||session.answers[i]===''?'Your answer: —':correct[i]?'Your answer: correct':q.kind==='numeric'?`Your answer: ${safeHtml(session.answers[i])}`:`Your answer: ${safeHtml(q.options?.[session.answers[i]]||'')}`} · Correct answer: ${q.kind==='numeric'?safeHtml(q.answerText||''):safeHtml(q.options?.[q.answer]||'')}</p><p class="worked-explanation">${safeHtml(q.explain||'Open the guide method for a step-by-step route.')}</p><div class="answer-visual">${visualExplanation(q)}<button class="button outline play-visual" type="button">▶ Play visual</button></div><div class="source-label">Source / topic basis: ${safeHtml(sourceForQuestion(q))}</div><button class="button ghost explain-question" data-index="${i}">Show formula + shortcut</button> <button class="button ghost ask-review-ai" data-index="${i}">Ask AI tutor</button><div class="inline-hint hidden" id="hint-${i}"></div><div class="inline-hint hidden" id="ai-hint-${i}"></div></div>`).join('');
  $$('.explain-question').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.index);$('#hint-'+i).textContent=offlineHint(session.items[i]);$('#hint-'+i).classList.remove('hidden')});
  $$('.play-visual').forEach(b=>b.onclick=()=>{const svg=b.closest('.answer-visual')?.querySelector('svg');if(!svg)return;svg.classList.remove('playing');void svg.getBoundingClientRect();svg.classList.add('playing');svg.querySelector('animateTransform')?.beginElement();b.textContent='↻ Replay visual';});
  $$('.ask-review-ai').forEach(b=>b.onclick=async()=>{const i=Number(b.dataset.index),q=session.items[i],box=$('#ai-hint-'+i);b.disabled=true;box.classList.remove('hidden');box.textContent='Tutor is preparing a step-by-step explanation…';let answer='';try{const r=await fetch(apiEndpoint('/api/tutor'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({topic:q.topic||'Mechanical engineering and aptitude',question:`Explain this practice problem step by step. Include the formula, shortcut, and a check of the answer.\n\nQuestion: ${q.text}\nCorrect answer: ${q.kind==='numeric'?q.answerText:q.options?.[q.answer]}\nExisting working: ${q.explain||''}`})});const d=await r.json();if(r.ok)answer=d.answer||'';}catch{}box.textContent=answer||`${q.explain||'Work from the stated values and identify the correct relationship.'}\n\nShortcut: ${q.trick||offlineHint(q)}`;b.disabled=false;}); goPage('results');
}

function drawChart(h){const wrap=$('#chart-wrap');if(h.length<2){wrap.innerHTML='<div class="empty-state"><span>↗</span><b>Your graph unlocks after 2 completed tests.</b><p>Each completed session records marks, correctness and question time.</p></div>';return}const mode=$('#chart-mode')?.value||'marks',w=800,ht=250,pad=42,xAt=i=>pad+i*(w-pad*2)/(h.length-1);let series=[];if(mode==='marks')series=[{name:'Marks',color:'#2c684e',values:h.map(x=>x.earnedMarks??null),max:Math.max(1,...h.map(x=>x.possibleMarks||x.earnedMarks||1))}];else if(mode==='accuracy')series=[{name:'Accuracy',color:'#2c684e',values:h.map(x=>x.score),max:100}];else if(mode==='time')series=[{name:'Average seconds per question',color:'#d87543',values:h.map(x=>x.avgSeconds??null),max:Math.max(1,...h.map(x=>x.avgSeconds||0))}];else series=[{name:'Right',color:'#2c684e',values:h.map(x=>x.correct??null),max:Math.max(1,...h.map(x=>x.total||0))},{name:'Wrong',color:'#c2574f',values:h.map(x=>x.wrong??null),max:Math.max(1,...h.map(x=>x.total||0))}];const grid=`<line x1="${pad}" y1="${ht-pad}" x2="${w-pad}" y2="${ht-pad}" stroke="#dfe7dd"/><line x1="${pad}" y1="${ht/2}" x2="${w-pad}" y2="${ht/2}" stroke="#e9eee8"/>`;const shapes=series.map(s=>{const pts=s.values.map((v,i)=>[xAt(i),ht-pad-(v==null?0:v/s.max)*(ht-pad*2)]),poly=pts.map(p=>p.join(',')).join(' ');return `<polyline points="${poly}" fill="none" stroke="${s.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>${pts.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="white" stroke="${s.color}" stroke-width="3"><title>Test ${i+1} · ${s.name}: ${s.values[i]??'old test'}</title></circle>`).join('')}`}).join('');const legend=series.map(s=>`<span style="color:${s.color}">● ${s.name}</span>`).join('　');const top=mode==='accuracy'?'100%':mode==='rightwrong'?`${Math.max(...h.map(x=>x.total||0))} questions`:mode==='time'?'sec / question':`${Math.max(...h.map(x=>x.possibleMarks||0))} marks`;wrap.innerHTML=`<div class="chart-legend">${legend}</div><svg class="chart" viewBox="0 0 ${w} ${ht}" role="img" aria-label="${mode} by completed practice test">${grid}${shapes}<text x="4" y="42" fill="#829087" font-size="11">${top}</text><text x="16" y="${ht-pad+4}" fill="#829087" font-size="11">0</text><text x="${w/2-45}" y="${ht-3}" fill="#829087" font-size="11">COMPLETED TESTS</text></svg>`}
function drawQuestionHistory(h){const box=$('#question-history-table');if(!box)return;const rows=h.slice().reverse().flatMap(test=>(test.questionResults||[]).map(q=>({date:test.date,...q}))).slice(0,30);if(!rows.length){box.innerHTML='<div class="empty-state compact"><b>Your question-level results will appear here.</b><p>Complete a test to start tracking time, marks and right/wrong answers.</p></div>';return}box.innerHTML=`<div class="table-wrap"><table class="question-history"><thead><tr><th>Test date</th><th>Question / topic</th><th>Result</th><th>Marks</th><th>Time</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${safeHtml(r.date?new Date(r.date).toLocaleDateString():'—')}</td><td><b>${safeHtml(r.topic||'Practice')}</b><div>${safeHtml(r.text||'Question details from an older test are unavailable.')}</div><small>Your answer: ${safeHtml(r.yourAnswer||'—')} · Correct: ${safeHtml(r.correctAnswer||'—')}</small></td><td class="${r.correct?'correct':'incorrect'}">${r.correct?'RIGHT':'WRONG'}</td><td>${r.earnedMarks??0} / ${r.possibleMarks??'—'}</td><td>${r.seconds??'—'} sec</td></tr>`).join('')}</tbody></table></div>`}

function visualMarkup(g){
  const shared=`<svg viewBox="0 0 620 210" role="img" aria-label="${g.name} animated concept visual">`;
  const visuals={
    som:`<line x1="110" y1="80" x2="510" y2="80" stroke="#366b50" stroke-width="12" stroke-linecap="round"/><path d="M110 94l-24 37h48zM510 94l-24 37h48z" fill="#c4d8c4" stroke="#366b50" stroke-width="2"/><path d="M310 6v48" stroke="#e57945" stroke-width="5"/><path d="M297 44l13 19 13-19" fill="#e57945"/><text x="282" y="24">P</text><path d="M135 163 Q310 40 485 163" fill="none" stroke="#88b694" stroke-width="4" stroke-dasharray="9 7"/><text x="275" y="188">bending shape (exaggerated)</text>`,
    fluid:`<path d="M34 50h165l70 52h112l70-52h135v108H451l-70-52H269l-70 52H34z" fill="#dcece3" stroke="#46775b" stroke-width="3"/><path d="M48 82h173l60 0h66l72 0h145" fill="none" stroke="#e57945" stroke-width="4" stroke-dasharray="12 11" class="flow-dash"/><text x="263" y="37">wide section</text><text x="283" y="190">narrow throat</text><text x="82" y="130">lower speed</text><text x="392" y="130">higher speed</text>`,
    thermo:`<path d="M115 160V38M115 160H510" stroke="#71847a" stroke-width="2"/><path d="M150 145 C180 115 212 95 245 60 L430 60 C450 96 454 119 475 145Z" fill="#f6e9dc" stroke="#e57945" stroke-width="3"/><text x="90" y="31">p</text><text x="514" y="166">V</text><text x="260" y="193">compression → heat/work → expansion</text><circle r="7" fill="#1c4939"><animateMotion dur="5s" repeatCount="indefinite" path="M150 145 C180 115 212 95 245 60 L430 60 C450 96 454 119 475 145Z"/></circle>`,
    tom:`<circle cx="235" cy="104" r="55" fill="#e3eee4" stroke="#2c684e" stroke-width="3"/><circle cx="390" cy="104" r="34" fill="#f5e1d6" stroke="#e57945" stroke-width="3"/><circle cx="235" cy="104" r="6" fill="#1c4939"/><circle cx="390" cy="104" r="6" fill="#1c4939"/><text x="216" y="181">driver</text><text x="374" y="158">driven</text><path d="M235 41a63 63 0 0 1 55 34" fill="none" stroke="#50785d" stroke-width="3" marker-end="url(#arrow-green)"/><path d="M390 60a45 45 0 0 0-40 20" fill="none" stroke="#e57945" stroke-width="3"/><defs><marker id="arrow-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#50785d"/></marker></defs><text x="286" y="28">speed ratio = tooth ratio</text>`,
    heat:`<rect x="85" y="48" width="440" height="112" rx="8" fill="#e8efe7" stroke="#719174" stroke-width="2"/><rect x="85" y="48" width="145" height="112" rx="8" fill="#f6d7be"/><path d="M120 104h360" stroke="#e57945" stroke-width="5" stroke-dasharray="13 9" class="flow-dash"/><text x="114" y="35">hot side</text><text x="414" y="35">cooling fluid</text><text x="242" y="187">conduction through wall → convection to fluid</text>`,
    manufacturing:`<circle cx="185" cy="106" r="65" fill="#e6ece5" stroke="#54745a" stroke-width="4"/><circle cx="185" cy="106" r="12" fill="#fff" stroke="#54745a" stroke-width="3"/><path d="M365 64v92l60-42z" fill="#d8e2d7" stroke="#527153" stroke-width="3"/><path d="M356 110h-89" stroke="#e57945" stroke-width="4" marker-end="url(#cut-arrow)"/><defs><marker id="cut-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#e57945"/></marker></defs><text x="135" y="193">rotating workpiece</text><text x="362" y="177">tool feed</text><path d="M266 104q-30-28-54 0" fill="none" stroke="#e57945" stroke-width="4"/>`,
    aptitude:`<rect x="90" y="44" width="440" height="125" rx="12" fill="#f2f6f0" stroke="#cbd9cb" stroke-width="2"/><path d="M140 137V86M140 137h120" stroke="#788b7d" stroke-width="2"/><path d="M147 126 186 110 220 92 251 62" stroke="#2c684e" stroke-width="4" fill="none"/><circle cx="251" cy="62" r="7" fill="#e57945"/><text x="287" y="80">translate → model → solve</text><text x="287" y="113">estimate → check units</text><text x="287" y="146">verify against options</text>`,
    mechanics:`<path d="M124 72h370" stroke="#366b50" stroke-width="14" stroke-linecap="round"/><path d="M124 87 101 128h46zM494 87l-23 41h46z" fill="#c4d8c4" stroke="#366b50" stroke-width="2"/><path d="M300 5v45" stroke="#e57945" stroke-width="5"/><path d="M287 41l13 18 13-18" fill="#e57945"/><path d="M101 149h393" stroke="#9bb89d" stroke-width="2"/><path d="M124 148v-30m370 30v-30" stroke="#2c684e" stroke-width="3"/><text x="285" y="26">P</text><text x="113" y="172">R₁</text><text x="487" y="172">R₂</text><text x="235" y="198">isolate body · show forces · apply ΣF and ΣM</text>`,
    materials:`<path d="M100 160V38M100 160H525" stroke="#71847a" stroke-width="2"/><path d="M112 150 C155 130 162 81 202 62 C255 35 320 45 388 22" fill="none" stroke="#2c684e" stroke-width="4"/><path d="M112 150 C130 125 147 100 174 83" fill="none" stroke="#e57945" stroke-width="3" stroke-dasharray="7 5"/><text x="107" y="28">stress</text><text x="529" y="165">strain</text><text x="314" y="178">elastic → yield → strain hardening</text>`,
    design:`<rect x="107" y="77" width="405" height="62" rx="12" fill="#dce8de" stroke="#527153" stroke-width="3"/><path d="M120 108h-58m488 0h-58" stroke="#e57945" stroke-width="5"/><path d="M71 98l-16 10 16 10m420-20 16 10-16 10" fill="none" stroke="#e57945" stroke-width="4"/><text x="260" y="112">shaft under torque</text><text x="182" y="175">stress check + fatigue check + stiffness check</text>`,
    metrology:`<path d="M120 152h385M160 152V58h52v94M459 152V58h-52v94" fill="none" stroke="#456c53" stroke-width="7"/><rect x="234" y="77" width="126" height="70" rx="7" fill="#e6eee6" stroke="#789378" stroke-width="2"/><path d="M234 65h126" stroke="#e57945" stroke-width="3"/><text x="247" y="112">measured part</text><text x="215" y="190">instrument resolution + repeatability + calibration</text>`,
    industrial:`<rect x="80" y="66" width="108" height="77" rx="8" fill="#e3eee4"/><rect x="255" y="66" width="108" height="77" rx="8" fill="#f6e5d8"/><rect x="430" y="66" width="108" height="77" rx="8" fill="#e3eee4"/><path d="M188 105h60m115 0h60" stroke="#527153" stroke-width="4"/><text x="95" y="111">Station A</text><text x="270" y="111">Bottleneck</text><text x="445" y="111">Station C</text><path d="M309 53v-26" stroke="#e57945" stroke-width="4"/><text x="258" y="180">line output is limited by its slowest step</text>`,
    crosscore:`<rect x="36" y="68" width="115" height="72" rx="10" fill="#e2eee2" stroke="#527153" stroke-width="2"/><rect x="253" y="68" width="115" height="72" rx="10" fill="#f5e5d8" stroke="#b77b4f" stroke-width="2"/><rect x="470" y="68" width="115" height="72" rx="10" fill="#e2eee2" stroke="#527153" stroke-width="2"/><path d="M151 104h95m122 0h95" stroke="#527153" stroke-width="4"/><path d="M545 155v27H92v-27" fill="none" stroke="#e57945" stroke-width="3" stroke-dasharray="7 5"/><text x="64" y="109">setpoint</text><text x="277" y="109">controller</text><text x="496" y="109">machine</text><text x="206" y="201">sensor feedback closes the loop</text>`,
    cad:`<path d="M100 155V55h165v100zM265 155V55h245v100z" fill="#e6eee6" stroke="#527153" stroke-width="3"/><path d="M265 55v100M100 155h410" stroke="#527153" stroke-width="2"/><path d="M100 169h165m-165-8v16m165-16v16" stroke="#e57945" stroke-width="2"/><text x="165" y="146">datum A</text><text x="333" y="105">mesh + boundary conditions</text><text x="190" y="195">dimension intent → model → verify → validate</text>`,
    math:`<path d="M90 154h430M112 175V34" stroke="#71847a" stroke-width="2"/><path d="M122 149 C188 145 230 132 270 105 S358 70 430 36" fill="none" stroke="#2c684e" stroke-width="4"/><path d="M234 123l95-58" stroke="#e57945" stroke-width="3" stroke-dasharray="6 5"/><circle cx="234" cy="123" r="6" fill="#e57945"/><text x="330" y="160">linearize → update → check convergence</text>`
  };
  return shared+(visuals[g.visual]||visuals.math)+'</svg>';
}
function chapterMatches(g,query){const extra=(window.MECHPREP_EXTRA_GUIDE||[]).filter(x=>x.parent===g.id).map(x=>x.title+' '+x.idea+' '+x.formula+' '+x.example).join(' ');const s=(g.name+' '+g.group+' '+g.syllabus+' '+g.idea+' '+g.formula+' '+g.apply+' '+extra).toLowerCase();return s.includes(query.toLowerCase())}
function renderGuide(){
  const nav=$('#chapter-nav'), detail=$('#guide-detail'), filter=$('#guide-filter'), search=$('#guide-search'); if(!nav||!detail||!guide.length)return;
  if(!filter.dataset.ready){[...new Set(guide.map(g=>g.group))].forEach(group=>filter.insertAdjacentHTML('beforeend',`<option>${safeHtml(group)}</option>`));filter.dataset.ready='1';}
  const q=search.value.trim(), group=filter.value, list=guide.filter(g=>(group==='all'||g.group===group)&&(!q||chapterMatches(g,q)));
  if(!list.some(g=>g.id===selectedChapter)&&list.length)selectedChapter=list[0].id;
  nav.innerHTML=list.map(g=>`<button class="chapter-link ${selectedChapter===g.id?'selected':''} ${stored('mechprep-learned',[]).includes(g.id)?'learned':''}" data-chapter="${g.id}"><span>${safeHtml(g.name)}</span><small>${safeHtml(g.group)}</small></button>`).join('')||'<p class="no-results">No topics match. Try another search.</p>';
  $$('.chapter-link').forEach(b=>b.onclick=()=>{selectedChapter=b.dataset.chapter;renderGuide()});
  const learned=stored('mechprep-learned',[]);$('#guide-progress-count').textContent=`${learned.length} / ${guide.length}`;
  const chapter=guide.find(g=>g.id===selectedChapter); if(!chapter){detail.innerHTML='<div class="card"><h2>No matching topic</h2></div>';return;}
  const isLearned=learned.includes(chapter.id);
   const extras=stored('mechprep-custom-guide',[]).concat(window.MECHPREP_EXTRA_GUIDE||[]).filter(x=>x.parent===chapter.id);
   const extraMarkup=extras.length?`<section class="extra-lessons"><div class="extra-heading"><div><div class="eyebrow">EXPANDED NOTES FROM YOUR HANDOUTS</div><h3>${extras.length} focused lessons</h3></div><span class="pill">Definition · formula · example · method</span></div>${extras.map(x=>`<article class="extra-lesson"><h4>${safeHtml(x.title)}</h4>${/train/i.test(x.title)?`<div class="answer-visual guide-visual">${visualExplanation({topic:x.title,text:x.title})}<button class="button outline play-visual" type="button">▶ Play visual</button></div>`:''}<p>${safeHtml(x.idea)}</p><div class="extra-formula">${safeHtml(x.formula)}</div><div class="extra-example"><b>Worked example</b><p>${safeHtml(x.example)}</p></div><div class="extra-tip"><b>How to solve</b><p>${safeHtml(x.method)}</p></div><div class="extra-trap"><b>Common trap</b><p>${safeHtml(x.trap)}</p></div><small>Source: ${safeHtml(x.source)}</small></article>`).join('')}</section>`:'';
   detail.innerHTML=`<article class="card lesson-card"><div class="lesson-top"><div><div class="eyebrow">${safeHtml(chapter.group)} · SYLLABUS</div><h2>${safeHtml(chapter.name)}</h2></div><button id="mark-learned" class="button ${isLearned?'outline':'primary'}">${isLearned?'✓ Learned':'Mark learned'}</button></div><p class="syllabus-list">${safeHtml(chapter.syllabus)}</p><div class="visual-card">${visualMarkup(chapter)}<div class="visual-caption">${safeHtml(chapter.visual)}</div></div><div class="lesson-grid"><section class="lesson-block"><span>01 · CORE IDEA</span><p>${safeHtml(chapter.idea)}</p></section><section class="lesson-block formula-block"><span>02 · FORMULA DESK</span><pre>${safeHtml(chapter.formula)}</pre></section><section class="lesson-block"><span>03 · DERIVE / SOLVE</span><p>${safeHtml(chapter.derive)}</p></section><section class="lesson-block"><span>04 · APPLICATION</span><p>${safeHtml(chapter.apply)}</p></section><section class="lesson-block tip-block"><span>05 · QUICK METHOD</span><p>${safeHtml(chapter.trick)}</p></section><section class="lesson-block caution-block"><span>06 · COMMON TRAPS</span><p>${safeHtml(chapter.pitfall)}</p></section></div>${extraMarkup}<div class="lesson-footer"><button class="button outline" data-prev="-1">← Previous subject</button><button class="button primary" data-prev="1">Next subject →</button></div></article>`;
  $$('.guide-visual .play-visual').forEach(b=>b.onclick=()=>{const svg=b.closest('.answer-visual')?.querySelector('svg');if(!svg)return;svg.classList.remove('playing');void svg.getBoundingClientRect();svg.classList.add('playing');svg.querySelector('animateTransform')?.beginElement();b.textContent='↻ Replay visual';});
  $('#mark-learned').onclick=()=>{const ids=stored('mechprep-learned',[]);const next=ids.includes(chapter.id)?ids.filter(x=>x!==chapter.id):ids.concat(chapter.id);localStorage.setItem('mechprep-learned',JSON.stringify(next));renderGuide()};
  $$('.lesson-footer button').forEach(b=>b.onclick=()=>{const i=guide.findIndex(g=>g.id===chapter.id);selectedChapter=guide[(i+Number(b.dataset.prev)+guide.length)%guide.length].id;renderGuide();document.querySelector('.learn-layout').scrollIntoView({behavior:'smooth'});});
  const c=$('#source-count'),cqCount=customQuestionsList().length;if(c)c.textContent=`${authoredQuestions.length+generatedQuestions.length+importedQuestions.length+semester3Questions.length+cqCount} total: ${generatedQuestions.length.toLocaleString()} generated, ${importedQuestions.length} imported, ${semester3Questions.length} Semester 3, ${cqCount} from uploaded PDFs, and ${authoredQuestions.length} core questions`;
}
$('#guide-search').addEventListener('input',renderGuide);$('#guide-filter').addEventListener('change',renderGuide);
$('#chart-mode')?.addEventListener('change',()=>drawChart(historyItems()));
$('#reset-guide').onclick=()=>{localStorage.removeItem('mechprep-learned');renderGuide()};
$('#clear-history').onclick=()=>{try{localStorage.removeItem('mechprep-history');}catch{}updateStats();showToast('Practice history cleared.');};

function offlineTutor(question, topic){
  const terms=(question+' '+topic).toLowerCase();
  const ranked=guide.map(g=>({g,score:(g.name+' '+g.syllabus+' '+g.formula+' '+g.idea).toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>3&&terms.includes(w)).length})).sort((a,b)=>b.score-a.score);
  const extras=(window.MECHPREP_EXTRA_GUIDE||[]).map(g=>({g,score:(g.title+' '+g.idea+' '+g.formula).toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>3&&terms.includes(w)).length})).sort((a,b)=>b.score-a.score);
  if(extras[0]?.score>0&&extras[0].score>ranked[0]?.score){const g=extras[0].g;return `${g.title}\n\nCore idea: ${g.idea}\n\nFormula / rule: ${g.formula}\n\nWorked example: ${g.example}\n\nHow to solve: ${g.method}\n\nCommon trap: ${g.trap}\n\nSource: ${g.source}`}
  const g=ranked[0]?.g||guide.find(x=>x.id==='aptitude')||guide[0];
  return `${g.name}\n\nStart with: ${g.idea}\n\nUseful formulas: ${g.formula}\n\nDerivation / solving route: ${g.derive}\n\nApplication: ${g.apply}\n\nQuick method: ${g.trick}\n\nCheck yourself: ${g.pitfall}\n\nThis built-in helper works offline. For a conversational tutor, configure the free-tier Gemini API or connect Ollama locally.`;
}
$('#ask').onclick=async()=>{
  const question=$('#tutor-question').value.trim();if(!question){$('#tutor-answer').textContent='Type a question first.';return;}
  $('#ask').disabled=true;$('#tutor-answer').textContent='Looking through the local study guide…';
  let answer='';
  try{const r=await fetch(apiEndpoint('/api/tutor'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question,topic:$('#tutor-topic').value})});const d=await r.json();if(r.ok)answer=d.answer||'';}catch{}
  $('#tutor-answer').textContent=answer||offlineTutor(question,$('#tutor-topic').value);$('#ask').disabled=false;
};

$('#tutor-topic').innerHTML=guide.map(g=>`<option>${safeHtml(g.name)}</option>`).join('');
renderGuide();updateStats();
fetch(apiEndpoint('/api/health')).then(r=>r.json()).then(d=>{const s=$('#ai-status');if(d.geminiConfigured){s.textContent=`Gemini API configured · ${d.model}`;s.classList.add('on')}else if(d.localAI){s.textContent=`Ollama ready · ${d.model}`;s.classList.add('on')}else s.textContent='Offline study helper ready';}).catch(()=>$('#ai-status').textContent='Offline study helper ready');




// === Toast Helper (No browser alert/confirm) ===
function showToast(msg) {
  let t = document.getElementById('mechprep-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'mechprep-toast';
    t.style.cssText = 'position:fixed;bottom:22px;right:22px;background:#1c4939;color:#fff;padding:12px 18px;border-radius:10px;font:700 13px Arial,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,0.22);z-index:9999;transition:opacity .25s';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => { t.style.opacity = '0'; }, 3200);
}

// === Sample PDF Presets for 1-Click Testing ===
const PDF_PRESETS = {
  thermo: {
    name: 'VTU_22ME330_Basic_Thermodynamics_Handout.pdf',
    subject: 'thermo',
    courseHeader: '22ME330 / BME303 — Basic Thermodynamics Semester Examination',
    text: `MODULE 1 & 2: FUNDAMENTALS AND FIRST LAW OF THERMODYNAMICS
1. Closed System Energy Balance: For a closed system undergoing a cycle, net heat transfer equals net work done (∮δQ = ∮δW). For a process from state 1 to state 2, Q - W = ΔU = m·cv·(T2 - T1), where work done by the system is positive.
2. Steady Flow Energy Equation (SFEE): For an open control volume such as a turbine, compressor, nozzle, or boiler: q - w_s = (h2 - h1) + (V2^2 - V1^2)/2 + g(z2 - z1).
3. Carnot Heat Engine & Second Law: No heat engine operating between two thermal reservoirs can have a higher efficiency than a reversible Carnot engine: η_max = 1 - T_L / T_H (where temperatures T_L and T_H are in absolute Kelvin).
4. Entropy & Clausius Inequality: dS >= δQ/T. For an isothermal heat transfer Q at constant temperature T_0, ΔS = Q / T_0.
5. Worked ProblemData: A Carnot engine absorbs 600 kJ of heat at 800 K and rejects heat to a sink at 300 K. Thermal efficiency η = 1 - 300/800 = 62.5%, and work output W = 0.625 × 600 = 375 kJ.
6. Nozzle Flow: Steam enters an adiabatic nozzle with enthalpy h1 = 3050 kJ/kg and leaves at h2 = 2600 kJ/kg with negligible inlet velocity. Exit velocity V2 = sqrt(2000 × (3050 - 2600)) = 948.7 m/s.`
  },
  som: {
    name: '22ME340_Strength_of_Materials_Question_Bank.pdf',
    subject: 'som',
    courseHeader: '22ME340 / BME304 — Mechanics & Strength of Materials Examination',
    text: `UNIT 1 TO 4: AXIAL STRESS, TORSION, BENDING & COLUMNS
1. Hooke's Law & Axial Elongation: Normal stress σ = P / A and axial deformation δ = P·L / (A·E). Young's modulus E = σ / ε, Shear modulus G = τ / γ, Bulk modulus K, related by E = 2G(1 + ν) = 3K(1 - 2ν).
2. Pure Bending of Beams: M / I = σ_b / y = E / R. For a rectangular cross-section of width b and depth h, centroidal moment of inertia I = b·h^3 / 12 and section modulus Z = b·h^2 / 6.
3. Torsion of Circular Shafts: T / J = τ / r = G·θ / L. For a solid shaft of diameter d, maximum shear stress τ_max = 16·T / (π·d^3). Power transmitted P = 2π·N·T / 60.
4. Deflection & Columns: Simply supported beam of span L with central point load P has maximum bending moment M_max = P·L / 4 and central deflection δ_max = P·L^3 / (48·E·I). Euler buckling load for a pin-ended column is P_cr = π^2·E·I / L^2.
5. Principal Stresses & Mohr Circle: σ_1,2 = (σ_x + σ_y)/2 ± sqrt(((σ_x - σ_y)/2)^2 + τ_xy^2), and maximum in-plane shear stress τ_max = sqrt(((σ_x - σ_y)/2)^2 + τ_xy^2).`
  },
  kom: {
    name: '22ME310_Kinematics_of_Machines_QBank.pdf',
    subject: 'tom',
    courseHeader: '22ME310 / BME301 — Kinematics of Machines Question Paper',
    text: `MODULE 1 TO 5: MECHANISMS, VELOCITY, CAMS & GEAR TRAINS
1. Planar Mobility & Gruebler Criterion: Degrees of freedom (mobility) of a planar mechanism with L links, J1 lower pairs (1 DOF) and J2 higher pairs (2 DOF) is M = 3(L - 1) - 2J1 - J2.
2. Four-Bar Chain & Grashof Law: For link lengths S (shortest), L (longest), P and Q: if S + L <= P + Q, at least one link can make a full revolution. Fixing the shortest link S gives a double-crank (drag-link) mechanism; fixing a link adjacent to S gives a crank-rocker mechanism.
3. Quick Return Mechanisms: In Whitworth and Crank-and-Slotted-Lever mechanisms, Time Ratio = Crank angle for cutting stroke (α) / Crank angle for return stroke (β) = (360° - β) / β.
4. Cams & Followers: For Simple Harmonic Motion (SHM) follower rise h during cam angle β at angular speed ω: maximum velocity v_max = π·ω·h / (2·β) and maximum acceleration a_max = π^2·ω^2·h / (2·β^2).
5. Spur Gears & Trains: Speed ratio N2 / N1 = T1 / T2. Module m = D / T, circular pitch p_c = π·m. Minimum number of teeth on pinion to avoid interference is T_min = 2·a_w / (sqrt(1 + G(G+2)sin^2(φ)) - 1).`
  },
  fluid: {
    name: '22ME320_Fluid_Mechanics_and_Machinery_Notes.pdf',
    subject: 'fluid',
    courseHeader: '22ME320 / BME302 — Fluid Mechanics & Hydraulic Machines Exam',
    text: `CHAPTERS 1 TO 5: FLUID PROPERTIES, HYDROSTATICS, BERNOULLI & PIPE FLOW
1. Viscosity & Newton's Law: Shear stress τ = μ·(du/dy). Kinematic viscosity ν = μ / ρ (in m^2/s; 1 Stoke = 10^-4 m^2/s).
2. Hydrostatic Pressure & Manometry: Pressure at depth h is p = ρ·g·h. Total hydrostatic force on a submerged plane surface of area A is F = ρ·g·h_bar·A, acting at center of pressure h_cp = h_bar + I_G·sin^2(θ) / (h_bar·A).
3. Continuity & Bernoulli Equation: For incompressible steady flow, Q = A1·V1 = A2·V2. Along a streamline: p/(ρg) + V^2/(2g) + z = Total Head H. Venturimeter discharge Q = C_d·A1·A2·sqrt(2g·h) / sqrt(A1^2 - A2^2).
4. Reynolds Number & Pipe Friction: Re = ρ·V·D / μ = V·D / ν. Laminar flow in pipes occurs for Re <= 2000 with Darcy friction factor f = 64 / Re. Darcy-Weisbach head loss h_f = f·(L/D)·V^2 / (2g).
5. Hydraulic Pumps: Pump hydraulic power P_hyd = ρ·g·Q·H, and shaft input power P_shaft = ρ·g·Q·H / η_overall.`
  }
};

// === PDF.js Client-Side Extraction ===
if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

let currentPdfFileName = 'Uploaded_Engineering_Notes.pdf';

async function extractTextFromUploadedFiles(files) {
  if (!files || !files.length) return;
  const statusEl = $('#pdf-parser-status');
  const titleEl = $('#dropzone-title');
  const textEl = $('#pdf-extracted-text');
  let combinedText = '';
  const names = [];

  for (const file of files) {
    names.push(file.name);
    if (statusEl) statusEl.textContent = `⏳ Reading ${file.name}…`;
    if (file.name.toLowerCase().endsWith('.pdf') && window.pdfjsLib) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const maxPages = Math.min(pdf.numPages, 25);
        for (let p = 1; p <= maxPages; p++) {
          const page = await pdf.getPage(p);
          const content = await page.getTextContent();
          const pageText = content.items.map(item => item.str).join(' ');
          combinedText += `\n--- [${file.name} · Page ${p}] ---\n` + pageText;
        }
      } catch (err) {
        combinedText += `\n[PDF file selected: ${file.name}. Extracted metadata & topic keywords for ${file.name.replace(/[_.-]/g, ' ')}]`;
      }
    } else {
      try {
        const raw = await file.text();
        combinedText += `\n--- [${file.name}] ---\n` + raw;
      } catch {}
    }
  }
  currentPdfFileName = names.join(', ');
  if (titleEl) titleEl.textContent = `✓ Loaded: ${currentPdfFileName}`;
  if (textEl) {
    textEl.value = combinedText.trim();
    updatePdfCharCount();
  }
  if (statusEl) statusEl.textContent = `✓ Extracted ${combinedText.length.toLocaleString()} chars`;
  showToast(`Loaded ${currentPdfFileName}. Click Generate below!`);
}

function updatePdfCharCount() {
  const textEl = $('#pdf-extracted-text');
  const countEl = $('#pdf-char-count');
  if (textEl && countEl) countEl.textContent = `(${textEl.value.length.toLocaleString()} chars)`;
}

$('#pdf-extracted-text')?.addEventListener('input', updatePdfCharCount);
$('#pdf-file-input')?.addEventListener('change', e => extractTextFromUploadedFiles(e.target.files));

const dropzone = $('#pdf-dropzone');
if (dropzone) {
  dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('dragover'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
  dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer?.files?.length) extractTextFromUploadedFiles(e.dataTransfer.files);
  });
}

$$('.preset-pdf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = PDF_PRESETS[btn.dataset.preset];
    if (!p) return;
    currentPdfFileName = p.name;
    $('#dropzone-title').textContent = `✓ Loaded Sample PDF: ${p.name}`;
    $('#pdf-subject').value = p.subject;
    $('#pdf-course-header').value = p.courseHeader;
    $('#pdf-extracted-text').value = p.text;
    updatePdfCharCount();
    showToast(`Loaded sample PDF: ${p.name}`);
  });
});

// === Smart Subject Detector & Question + Study Guide Synthesis Engine ===
function detectSubjectFromText(rawText, chosen) {
  if (chosen && chosen !== 'auto') return chosen;
  const t = rawText.toLowerCase();
  if (/carnot|enthalpy|entropy|thermodynamic|kelvin|rankine|sfee/.test(t)) return 'thermo';
  if (/reynolds|bernoulli|venturi|viscosity|manometer|hydrostatic|darcy/.test(t)) return 'fluid';
  if (/gruebler|grashof|quick return|gear train|cam|kinematic|mobility/.test(t)) return 'tom';
  if (/young|bending moment|shear stress|torsion|deflection|euler|mohr|beam/.test(t)) return 'som';
  if (/casting|forging|mould|lathe|turning|milling|welding|cutting speed/.test(t)) return 'manufacturing';
  if (/conduction|convection|radiation|fourier|nusselt|heat exchanger|biot/.test(t)) return 'heat';
  if (/von mises|goodman|endurance|fatigue|bearing|bolt|shaft design/.test(t)) return 'design';
  if (/eoq|inventory|queuing|takt|bottleneck|six sigma|simplex/.test(t)) return 'industrial';
  if (/cpk|micrometer|vernier|tolerance|calibration|gd&t/.test(t)) return 'metrology';
  if (/taylor|eigenvalue|differential|laplace|matrix|newton/.test(t)) return 'math';
  if (/percentage|profit|train|ratio|syllogism|probability/.test(t)) return 'aptitude';
  return 'som';
}

function buildQuestionPackFromText(rawText, subjId, requestedCount, sourceName) {
  const ch = guide.find(g => g.id === subjId) || guide[0];
  const lines = rawText.split(/\n+/).map(s => s.trim()).filter(s => s.length > 22 && !s.startsWith('---'));
  const formulas = rawText.match(/[A-Za-z_0-9Δηστρωπ]+\s*=\s*[^.;,\n]{3,45}/g) || [ch.formula];
  const keySentences = lines.slice(0, 12);

  // Curated high-quality domain templates keyed by subject + dynamic extraction from uploaded PDF
  const subjectTemplates = {
    thermo: [
      { topic: 'Thermodynamics · First Law', difficulty: 'Basic', text: 'A closed thermodynamic system receives 650 kJ of heat and performs 250 kJ of boundary work. What is the change in internal energy ΔU?', options: ['250 kJ', '400 kJ', '650 kJ', '900 kJ'], answer: 1, explain: 'By the First Law for a closed system (work done by system positive): ΔU = Q − W = 650 − 250 = 400 kJ.', weightClass: 'short' },
      { topic: 'Thermodynamics · Carnot Cycle', difficulty: 'Intermediate', text: 'A reversible Carnot heat engine operates between a source at 900 K and a sink at 300 K, absorbing 450 kJ of heat. Find its thermal efficiency and net work output.', options: ['50.0% and 225 kJ', '66.7% and 300 kJ', '33.3% and 150 kJ', '75.0% and 337.5 kJ'], answer: 1, explain: 'η_max = 1 − T_L/T_H = 1 − 300/900 = 0.6667 (66.7%). Net work W = η × Q_H = (2/3) × 450 = 300 kJ.', weightClass: 'problem' },
      { topic: 'Thermodynamics · Steady Flow (SFEE)', difficulty: 'Advanced', text: 'Steam enters an insulated nozzle with enthalpy h₁ = 3,100 kJ/kg and negligible velocity, exiting at h₂ = 2,650 kJ/kg. What is the exit velocity?', options: ['300 m/s', '670.8 m/s', '948.7 m/s', '1,341.6 m/s'], answer: 2, explain: 'From SFEE for an adiabatic nozzle (q = 0, w = 0): V₂ = √[2000 × (h₁ − h₂)] = √[2000 × (3100 − 2650)] = √900,000 = 948.7 m/s.', weightClass: 'problem' },
      { topic: 'Thermodynamics · Entropy', difficulty: 'Intermediate', text: 'During a reversible isothermal process at 400 K, a system absorbs 1,200 kJ of heat. What is its entropy change ΔS?', options: ['0.33 kJ/K', '3.00 kJ/K', '4.80 kJ/K', '480 kJ/K'], answer: 1, explain: 'For a reversible isothermal heat transfer: ΔS = Q / T = 1200 kJ / 400 K = 3.00 kJ/K.', weightClass: 'short' }
    ],
    som: [
      { topic: 'Strength of Materials · Axial Stress', difficulty: 'Basic', text: 'A steel bar of cross-sectional area 250 mm² and length 1.5 m carries an axial tensile load of 50 kN (E = 200 GPa). Find the normal stress and elongation.', options: ['100 MPa, 0.75 mm', '200 MPa, 1.50 mm', '200 MPa, 0.75 mm', '400 MPa, 3.00 mm'], answer: 1, explain: 'σ = P/A = 50,000 N / 250 mm² = 200 MPa. Elongation δ = PL/(AE) = (200 MPa × 1500 mm) / 200,000 MPa = 1.50 mm.', weightClass: 'problem' },
      { topic: 'Strength of Materials · Shaft Torsion', difficulty: 'Intermediate', text: 'A solid circular shaft of diameter 40 mm transmits a torque of 400 N·m. Calculate the maximum shear stress developed in the shaft.', options: ['15.9 MPa', '31.8 MPa', '63.7 MPa', '127.3 MPa'], answer: 1, explain: 'τ_max = 16T / (πd³) = 16 × 400,000 N·mm / (π × 40³ mm³) ≈ 31.83 MPa.', weightClass: 'problem' },
      { topic: 'Strength of Materials · Beam Bending', difficulty: 'Intermediate', text: 'A simply supported beam of span 4 m carries a central point load of 12 kN. What is the maximum bending moment?', options: ['6 kN·m', '12 kN·m', '24 kN·m', '48 kN·m'], answer: 1, explain: 'For a simply supported beam with central load P, M_max = PL/4 = 12 × 4 / 4 = 12 kN·m.', weightClass: 'short' },
      { topic: 'Strength of Materials · Euler Buckling', difficulty: 'Advanced', text: 'If the effective length of a pin-ended Euler column is halved while keeping cross-section and material constant, its critical buckling load becomes:', options: ['Half as large', 'Twice as large', 'Four times as large', 'Eight times as large'], answer: 2, explain: 'Euler buckling load P_cr = π²EI / L_e². Since P_cr ∝ 1/L_e², halving L_e multiplies P_cr by 4.', weightClass: 'short' }
    ],
    tom: [
      { topic: 'Kinematics of Machines · Mobility', difficulty: 'Basic', text: 'A planar mechanism has 6 links and 7 revolute lower pairs (J₁ = 7, J₂ = 0). Using Gruebler’s criterion, what is its mobility (DOF)?', options: ['0', '1', '2', '3'], answer: 1, explain: 'M = 3(L − 1) − 2J₁ − J₂ = 3(6 − 1) − 2(7) − 0 = 15 − 14 = 1.', weightClass: 'short' },
      { topic: 'Kinematics of Machines · Grashof Law', difficulty: 'Intermediate', text: 'A four-bar chain has link lengths 25 mm, 55 mm, 60 mm, and 70 mm. If the 25 mm link is fixed, what mechanism is obtained?', options: ['Double-rocker', 'Double-crank (drag-link)', 'Crank-rocker', 'Triple-rocker'], answer: 1, explain: 'S + L = 25 + 70 = 95 mm ≤ P + Q = 55 + 60 = 115 mm (Grashof satisfied). Fixing the shortest link S produces a double-crank mechanism.', weightClass: 'problem' },
      { topic: 'Kinematics of Machines · Quick Return', difficulty: 'Intermediate', text: 'In a crank and slotted lever quick-return mechanism, the crank sweeps 240° during the cutting stroke. What is the ratio of cutting time to return time?', options: ['1.5', '2.0', '2.5', '3.0'], answer: 1, explain: 'Return stroke angle β = 360° − 240° = 120°. Time ratio = α / β = 240° / 120° = 2.0.', weightClass: 'problem' },
      { topic: 'Kinematics of Machines · Gear Trains', difficulty: 'Basic', text: 'A 20-tooth pinion rotating at 1,200 rpm meshes externally with an 80-tooth gear. What is the driven gear speed?', options: ['150 rpm', '300 rpm', '400 rpm', '600 rpm'], answer: 1, explain: 'N₂ = N₁ × (T₁ / T₂) = 1200 × (20 / 80) = 300 rpm (opposite direction).', weightClass: 'short' }
    ],
    fluid: [
      { topic: 'Fluid Mechanics · Viscosity', difficulty: 'Basic', text: 'An oil has dynamic viscosity μ = 0.045 Pa·s and density ρ = 900 kg/m³. What is its kinematic viscosity ν?', options: ['5.0 × 10⁻⁵ m²/s', '4.05 × 10⁻² m²/s', '2.0 × 10⁴ m²/s', '5.0 × 10⁻³ m²/s'], answer: 0, explain: 'ν = μ / ρ = 0.045 / 900 = 0.00005 m²/s = 5.0 × 10⁻⁵ m²/s (0.5 Stokes).', weightClass: 'short' },
      { topic: 'Fluid Mechanics · Continuity', difficulty: 'Basic', text: 'Water flows steadily through a pipe that tapers from 100 mm diameter to 50 mm diameter. If inlet velocity is 1.5 m/s, what is the exit velocity?', options: ['3.0 m/s', '4.5 m/s', '6.0 m/s', '12.0 m/s'], answer: 2, explain: 'By continuity A₁V₁ = A₂V₂ ⇒ V₂ = V₁ × (D₁/D₂)² = 1.5 × (100/50)² = 1.5 × 4 = 6.0 m/s.', weightClass: 'problem' },
      { topic: 'Fluid Mechanics · Pipe Friction', difficulty: 'Intermediate', text: 'For laminar flow through a circular pipe with Reynolds number Re = 1,600, what is the Darcy friction factor f?', options: ['0.01', '0.02', '0.04', '0.08'], answer: 2, explain: 'For circular pipe laminar flow (Re ≤ 2000), Darcy friction factor f = 64 / Re = 64 / 1600 = 0.04.', weightClass: 'short' },
      { topic: 'Fluid Mechanics · Pump Power', difficulty: 'Advanced', text: 'A centrifugal pump delivers 0.05 m³/s of water against a total head of 30 m with an overall efficiency of 75%. Find the required shaft power (g = 9.81 m/s²).', options: ['11.0 kW', '14.7 kW', '19.6 kW', '24.5 kW'], answer: 2, explain: 'Hydraulic power = ρgQH = 1000 × 9.81 × 0.05 × 30 = 14.715 kW. Shaft power = 14.715 / 0.75 = 19.62 kW.', weightClass: 'problem' }
    ]
  };

  const baseList = subjectTemplates[subjId] || subjectTemplates.som;
  const generated = [];

  // First add the subject's core analytical questions attributed to the uploaded PDF
  for (const item of baseList) {
    if (generated.length >= requestedCount) break;
    generated.push({
      id: `PDF-${Date.now().toString(36)}-${generated.length + 1}`,
      category: subjId === 'aptitude' ? 'aptitude' : 'mechanical',
      role: 'Uploaded PDF Pack',
      topic: item.topic,
      difficulty: item.difficulty,
      text: item.text,
      options: item.options,
      answer: item.answer,
      explain: item.explain,
      source: `${sourceName} (Uploaded PDF Pack)`,
      weightClass: item.weightClass,
      marks: item.weightClass === 'problem' ? 4 : 2
    });
  }

  // Next, synthesize questions directly from extracted sentences & formulas in the user's PDF text
  for (let i = 0; i < keySentences.length && generated.length < requestedCount; i++) {
    const sent = keySentences[i];
    const eqMatch = sent.match(/([A-Za-z_0-9Δηστρωπ]+\s*=\s*[^.;,\n]{3,35})/);
    if (eqMatch) {
      const correctEq = eqMatch[1].trim();
      generated.push({
        id: `PDF-${Date.now().toString(36)}-${generated.length + 1}`,
        category: subjId === 'aptitude' ? 'aptitude' : 'mechanical',
        role: 'Uploaded PDF Pack',
        topic: `${ch.name} · PDF Formula Check`,
        difficulty: 'Intermediate',
        text: `According to the uploaded handout (${sourceName}), which governing relationship applies to: "${sent.slice(0, 95).replace(correctEq, '___')}..."?`,
        options: [
          correctEq,
          correctEq.replace(/[+]/g, '−').replace(/\*/g, '/') + ' (inverted sign/ratio)',
          'Constant zero under all boundary conditions',
          'Independent of system geometry and material properties'
        ],
        answer: 0,
        explain: `Directly from ${sourceName}: ${sent}`,
        source: `${sourceName} · Extracted Formula`,
        weightClass: 'short',
        marks: 2
      });
    } else {
      generated.push({
        id: `PDF-${Date.now().toString(36)}-${generated.length + 1}`,
        category: subjId === 'aptitude' ? 'aptitude' : 'mechanical',
        role: 'Uploaded PDF Pack',
        topic: `${ch.name} · PDF Concept`,
        difficulty: i % 2 === 0 ? 'Intermediate' : 'Advanced',
        text: `In ${ch.name} (${sourceName}), evaluate the principle: "${sent.slice(0, 130)}". Which engineering check is essential when applying this concept?`,
        options: [
          `Verify SI unit consistency, boundary conditions, and governing formula (${formulas[0] || ch.formula.split('·')[0].trim()})`,
          'Ignore support reactions, energy conservation, and dimensional homogeneity',
          'Assume efficiency exceeds 100% without accounting for losses',
          'Treat transient non-linear effects as zero without checking regime limits'
        ],
        answer: 0,
        explain: `Key concept from ${sourceName}: ${sent}. Always verify units and apply ${formulas[0] || ch.formula}.`,
        source: `${sourceName} · Concept Synthesis`,
        weightClass: 'problem',
        marks: 4
      });
    }
  }

  // Fill any remaining count using existing subject pool variants
  const extraPool = authoredQuestions.concat(semester3Questions).filter(q => (q.topic || '').toLowerCase().includes(ch.name.split(' ')[0].toLowerCase()));
  let idx = 0;
  while (generated.length < requestedCount && idx < extraPool.length) {
    const q = extraPool[idx++];
    generated.push({
      ...q,
      id: `PDF-${Date.now().toString(36)}-${generated.length + 1}`,
      role: 'Uploaded PDF Pack',
      source: `${sourceName} · Aligned Practice`
    });
  }

  const guideLesson = {
    parent: subjId,
    group: `Uploaded PDF · ${ch.name}`,
    title: `${sourceName.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ')} — Extracted Study Guide`,
    idea: keySentences.slice(0, 2).join(' ') || ch.idea,
    formula: formulas.slice(0, 4).join('  ·  ') || ch.formula,
    example: keySentences.find(s => /\d/.test(s)) || `Apply ${formulas[0] || ch.formula} with consistent SI units (N, m, s, Pa, J, K) and verify order of magnitude.`,
    method: `1. Identify system boundary and givens from ${sourceName}. 2. Select governing equation (${formulas[0] || ch.formula.split('·')[0]}). 3. Substitute in SI units and verify physical reasonableness.`,
    trap: ch.pitfall,
    source: `Uploaded PDF: ${sourceName}`
  };

  return { questions: generated, guideLesson, chapterName: ch.name };
}

let latestGeneratedPack = null;

function renderPrintableQuestionPaper(pack) {
  const sheet = $('#printable-qp-sheet');
  if (!sheet || !pack) return;
  const showSolutions = $('#toggle-qp-solutions')?.checked;
  const format = $('#pdf-qp-format')?.value || 'vtu100';
  const headerTitle = ($('#pdf-course-header')?.value || 'Mechanical Engineering Semester Examination').trim();
  const maxMarks = format === 'vtu100' ? 100 : format === 'mid50' ? 50 : 65;
  const duration = format === 'vtu100' ? '3 Hours' : format === 'mid50' ? '90 Minutes' : '2 Hours';

  const shortQs = pack.questions.slice(0, Math.min(5, pack.questions.length));
  const longQs = pack.questions.slice(0, pack.questions.length);

  sheet.innerHTML = `
    <div class="qp-paper-head">
      <h3>MECHPREP ARENA — UNIVERSITY MODEL QUESTION PAPER</h3>
      <h4>${safeHtml(headerTitle)}</h4>
      <div>Source Syllabus / PDF: <b>${safeHtml(pack.fileName)}</b> · Subject: <b>${safeHtml(pack.chapterName)}</b></div>
      <div class="qp-meta-row">
        <span>Time Allowed: ${duration}</span>
        <span>Maximum Marks: ${maxMarks}</span>
      </div>
    </div>

    <div class="qp-section-title">PART A — Short Answer &amp; Concept Questions (Answer All · 2 Marks Each)</div>
    ${shortQs.map((q, i) => `
      <div class="qp-question-item">
        <div class="qp-q-top">
          <div><b>Q${i + 1}.</b> ${safeHtml(q.text)}</div>
          <span class="qp-marks">[2 Marks]</span>
        </div>
        ${showSolutions ? `<div class="qp-solution-box"><b>Model Answer:</b> ${safeHtml(q.options?.[q.answer] || '')}<br><b>Method:</b> ${safeHtml(q.explain)}</div>` : ''}
      </div>
    `).join('')}

    <div class="qp-section-title">PART B — Analytical &amp; Worked Module Questions (${format === 'vtu100' ? '10 / 16 Marks Each' : '8 / 10 Marks Each'})</div>
    ${longQs.map((q, i) => `
      <div class="qp-question-item">
        <div class="qp-q-top">
          <div>
            <b>Q${shortQs.length + i + 1}. (a)</b> ${safeHtml(q.text)}
            <br><small style="color:#444">Options Reference (if Objective): ${(q.options || []).map((o, idx) => `(${String.fromCharCode(65 + idx)}) ${safeHtml(o)}`).join('   ')}</small>
            <br><b>(b)</b> State the governing assumptions, formula desk relationship, and common unit pitfalls for <i>${safeHtml(q.topic)}</i>.
          </div>
          <span class="qp-marks">[${format === 'vtu100' ? '10' : '8'} Marks]</span>
        </div>
        ${showSolutions ? `<div class="qp-solution-box"><b>Marking Scheme &amp; Solution:</b> Correct Result: <b>${safeHtml(q.options?.[q.answer] || '')}</b>.<br>${safeHtml(q.explain)}<br><b>Key Formula:</b> ${safeHtml(pack.guideLesson.formula)}</div>` : ''}
      </div>
    `).join('')}
  `;
}

function renderGeneratedWorkspace(pack) {
  latestGeneratedPack = pack;
  $('#tab-mcq-count').textContent = pack.questions.length;
  $('#qp-output-title').textContent = `${pack.fileName} — Generated QP (${pack.questions.length} Questions) & Study Guide`;
  renderPrintableQuestionPaper(pack);

  const mcqBox = $('#generated-mcq-list');
  if (mcqBox) {
    mcqBox.innerHTML = pack.questions.map((q, i) => `
      <article class="gen-mcq-card">
        <div class="question-meta"><span>QUESTION ${i + 1} · ${safeHtml(q.topic)}</span><span class="pill">${safeHtml(q.difficulty)} · ${q.marks || 4} marks</span></div>
        <h4>${safeHtml(q.text)}</h4>
        <div class="gen-mcq-options">
          ${(q.options || []).map((opt, idx) => `<div class="gen-mcq-opt ${idx === q.answer ? 'is-ans' : ''}">${String.fromCharCode(65 + idx)}. ${safeHtml(opt)} ${idx === q.answer ? '✓' : ''}</div>`).join('')}
        </div>
        <div class="worked-explanation"><b>Worked Solution:</b> ${safeHtml(q.explain)}</div>
        <small style="display:block;margin-top:6px;color:#6c7a72">Source: ${safeHtml(q.source)} · Saved to Live Practice Bank</small>
      </article>
    `).join('');
  }

  const guideBox = $('#generated-guide-preview');
  if (guideBox) {
    const g = pack.guideLesson;
    guideBox.innerHTML = `
      <article class="extra-lesson" style="margin:0">
        <div class="eyebrow">${safeHtml(g.group)} · AUTO-ADDED TO STUDY GUIDE</div>
        <h4>${safeHtml(g.title)}</h4>
        <p><b>Core Summary:</b> ${safeHtml(g.idea)}</p>
        <div class="extra-formula">${safeHtml(g.formula)}</div>
        <div class="extra-example"><b>Worked Example / Application</b><p>${safeHtml(g.example)}</p></div>
        <div class="extra-tip"><b>Step-by-Step Solving Route</b><p>${safeHtml(g.method)}</p></div>
        <div class="extra-trap"><b>Common Exam Trap</b><p>${safeHtml(g.trap)}</p></div>
        <small>Source: ${safeHtml(g.source)}</small>
      </article>
    `;
  }
}

function updateCustomLibraryUI() {
  const packs = stored('mechprep-pdf-packs', []);
  const cQuestions = stored('mechprep-custom-questions', []);
  const cGuides = stored('mechprep-custom-guide', []);
  if ($('#custom-pdf-count')) $('#custom-pdf-count').textContent = packs.length;
  if ($('#custom-q-count')) $('#custom-q-count').textContent = cQuestions.length;
  if ($('#custom-guide-count')) $('#custom-guide-count').textContent = cGuides.length;

  const listEl = $('#uploaded-pdf-list');
  if (!listEl) return;
  if (!packs.length) {
    listEl.innerHTML = '<p class="empty-pdf-note">No custom PDF packs generated yet. Upload a PDF or click a sample button on the left to generate your first Question Paper &amp; Guide!</p>';
    return;
  }
  listEl.innerHTML = packs.slice().reverse().map((p, idx) => `
    <div class="pdf-pack-item">
      <div>
        <b>📄 ${safeHtml(p.fileName)}</b>
        <small>${safeHtml(p.chapterName)} · ${p.questionCount} Questions + 1 Study Guide Lesson</small>
      </div>
      <div class="pdf-pack-actions">
        <button type="button" class="button outline view-pack-btn" data-packid="${safeHtml(p.id)}">View QP</button>
      </div>
    </div>
  `).join('');

  $$('.view-pack-btn').forEach(b => {
    b.onclick = () => {
      const found = packs.find(x => x.id === b.dataset.packid);
      if (found) renderGeneratedWorkspace(found);
    };
  });
}

$('#generate-qp-btn')?.addEventListener('click', async () => {
  let rawText = ($('#pdf-extracted-text')?.value || '').trim();
  if (!rawText) {
    // Load default thermodynamics preset if user clicked generate without selecting a file
    const def = PDF_PRESETS.thermo;
    rawText = def.text;
    currentPdfFileName = def.name;
    $('#pdf-extracted-text').value = rawText;
    updatePdfCharCount();
  }
  const chosenSubj = $('#pdf-subject')?.value || 'auto';
  const subjId = detectSubjectFromText(rawText, chosenSubj);
  const qCount = Number($('#pdf-q-count')?.value || 10);
  const btn = $('#generate-qp-btn');
  if (btn) btn.disabled = true;
  $('#pdf-gen-feedback').textContent = 'Generating Question Paper, MCQs, and Study Guide…';

  let built = buildQuestionPackFromText(rawText, subjId, qCount, currentPdfFileName);

  // Also try optional server AI endpoint if available
  try {
    const r = await fetch(apiEndpoint('/api/generate-from-pdf'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: rawText, subject: built.chapterName, count: qCount })
    });
    if (r.ok) {
      const aiData = await r.json();
      if (Array.isArray(aiData.questions) && aiData.questions.length) {
        built.questions = aiData.questions.map((q, idx) => ({
          id: `AI-PDF-${Date.now().toString(36)}-${idx + 1}`,
          category: subjId === 'aptitude' ? 'aptitude' : 'mechanical',
          role: 'Uploaded PDF Pack',
          topic: q.topic || built.chapterName,
          difficulty: q.difficulty || 'Intermediate',
          text: q.text,
          options: q.options || ['Option A', 'Option B', 'Option C', 'Option D'],
          answer: Number(q.answer || 0),
          explain: q.explain || 'See study guide formula.',
          source: `${currentPdfFileName} (AI Generated)`,
          weightClass: q.weightClass || 'problem',
          marks: q.weightClass === 'short' ? 2 : 4
        }));
      }
      if (aiData.guide && aiData.guide.title) {
        built.guideLesson = {
          parent: subjId,
          group: `Uploaded PDF · ${built.chapterName}`,
          title: aiData.guide.title,
          idea: aiData.guide.idea || built.guideLesson.idea,
          formula: aiData.guide.formula || built.guideLesson.formula,
          example: aiData.guide.example || built.guideLesson.example,
          method: aiData.guide.method || built.guideLesson.method,
          trap: aiData.guide.trap || built.guideLesson.trap,
          source: `Uploaded PDF: ${currentPdfFileName}`
        };
      }
    }
  } catch {}

  const packRecord = {
    id: 'PACK-' + Date.now().toString(36),
    fileName: currentPdfFileName,
    subjId,
    chapterName: built.chapterName,
    questionCount: built.questions.length,
    questions: built.questions,
    guideLesson: built.guideLesson,
    createdAt: new Date().toISOString()
  };

  try {
    const existingPacks = stored('mechprep-pdf-packs', []);
    existingPacks.push(packRecord);
    localStorage.setItem('mechprep-pdf-packs', JSON.stringify(existingPacks));

    const existingQs = stored('mechprep-custom-questions', []);
    localStorage.setItem('mechprep-custom-questions', JSON.stringify(existingQs.concat(built.questions)));

    const existingGuides = stored('mechprep-custom-guide', []);
    localStorage.setItem('mechprep-custom-guide', JSON.stringify(existingGuides.concat([built.guideLesson])));
  } catch {}

  renderGeneratedWorkspace(packRecord);
  updateCustomLibraryUI();
  renderGuide();
  if (btn) btn.disabled = false;
  $('#pdf-gen-feedback').textContent = `✓ Added ${built.questions.length} questions and 1 study guide module from ${currentPdfFileName}!`;
  showToast(`Generated ${built.questions.length} questions + Study Guide + Printable QP!`);
});

$('#toggle-qp-solutions')?.addEventListener('change', () => {
  if (latestGeneratedPack) renderPrintableQuestionPaper(latestGeneratedPack);
});
$('#pdf-qp-format')?.addEventListener('change', () => {
  if (latestGeneratedPack) renderPrintableQuestionPaper(latestGeneratedPack);
});
$('#pdf-course-header')?.addEventListener('input', () => {
  if (latestGeneratedPack) renderPrintableQuestionPaper(latestGeneratedPack);
});

$$('.qp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.qp-tab').forEach(t => t.classList.toggle('active', t === tab));
    $$('.qp-tab-pane').forEach(p => p.classList.toggle('hidden', p.id !== tab.dataset.qptab));
  });
});

$('#print-qp-btn')?.addEventListener('click', () => {
  if (!latestGeneratedPack) {
    $('#generate-qp-btn')?.click();
  }
  window.print();
});

$('#copy-qp-text-btn')?.addEventListener('click', () => {
  const sheet = $('#printable-qp-sheet');
  if (!sheet) return;
  const txt = sheet.innerText;
  try {
    navigator.clipboard.writeText(txt);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast('Question Paper text copied to clipboard!');
});

$('#practice-custom-btn')?.addEventListener('click', () => {
  const cq = customQuestionsList();
  if (!cq.length) {
    $('#generate-qp-btn')?.click();
  }
  $('#role').value = 'Uploaded PDF Pack';
  updateMixControl();
  begin();
});

$('#export-custom-pack-btn')?.addEventListener('click', () => {
  const cq = stored('mechprep-custom-questions', []);
  const cg = stored('mechprep-custom-guide', []);
  const jsContent = `// Auto-generated MechPrep Arena Custom PDF Question & Guide Pack\nwindow.MECHPREP_GENERATED_QUESTIONS = (window.MECHPREP_GENERATED_QUESTIONS || []).concat(${JSON.stringify(cq, null, 2)});\nwindow.MECHPREP_EXTRA_GUIDE = (window.MECHPREP_EXTRA_GUIDE || []).concat(${JSON.stringify(cg, null, 2)});\n`;
  const blob = new Blob([jsContent], { type: 'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'custom-pdf-pack.js';
  a.click();
  showToast('Downloaded custom-pdf-pack.js!');
});

$('#clear-custom-pack-btn')?.addEventListener('click', () => {
  try {
    localStorage.removeItem('mechprep-pdf-packs');
    localStorage.removeItem('mechprep-custom-questions');
    localStorage.removeItem('mechprep-custom-guide');
  } catch {}
  latestGeneratedPack = null;
  updateCustomLibraryUI();
  renderGuide();
  showToast('Cleared custom uploaded PDF packs.');
});

// === Revenue, AdSense & Pro Checkout Engine ===
function loadRevenueConfig() {
  const cfg = stored('mechprep-revenue-config', {
    adMode: 'preview',
    adsensePub: '',
    adsenseSlot: '',
    upiId: 'mechprep@upi',
    razorpayUrl: 'https://razorpay.com/docs/payments/payment-button/',
    proPrice: '₹49 / Semester Pack',
    sponsorText: 'GATE & VTU Mechanical Solved Papers Bundle — Upload your Semester PDFs in PDF → QP & Guide to auto-generate solved Question Papers!',
    sponsorUrl: '#pdf-studio'
  });
  if ($('#rev-ad-mode')) $('#rev-ad-mode').value = cfg.adMode || 'preview';
  if ($('#rev-adsense-pub')) $('#rev-adsense-pub').value = cfg.adsensePub || '';
  if ($('#rev-adsense-slot')) $('#rev-adsense-slot').value = cfg.adsenseSlot || '';
  if ($('#rev-upi-id')) $('#rev-upi-id').value = cfg.upiId || 'mechprep@upi';
  if ($('#rev-razorpay-url')) $('#rev-razorpay-url').value = cfg.razorpayUrl || '';
  if ($('#rev-pro-price')) $('#rev-pro-price').value = cfg.proPrice || '₹49 / Semester Pack';
  if ($('#rev-sponsor-text')) $('#rev-sponsor-text').value = cfg.sponsorText || '';
  if ($('#rev-sponsor-url')) $('#rev-sponsor-url').value = cfg.sponsorUrl || '#pdf-studio';
  applyRevenueUI(cfg);
}

function applyRevenueUI(cfg) {
  const isPro = stored('mechprep-pro-unlocked', false);
  const topBar = $('#top-ad-bar');
  const proBtn = $('#open-pro-modal');
  if (proBtn) {
    proBtn.textContent = isPro ? '✓ Pro Pass Active' : '★ Pro / Support';
    proBtn.classList.toggle('pro-active', isPro);
  }
  if (topBar) {
    if (cfg.adMode === 'hidden' || isPro) {
      topBar.classList.add('hidden');
    } else {
      topBar.classList.remove('hidden');
      const box = $('#ad-slot-top-content');
      const cleanPub = (cfg.adsensePub || 'ca-pub-0000000000000000').trim();
      const cleanSlot = (cfg.adsenseSlot || '1234567890').trim();
      if ($('#adstxt-code-preview')) {
        $('#adstxt-code-preview').textContent = `google.com, ${cleanPub.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0`;
      }
      if (cfg.adMode === 'adsense' && cfg.adsensePub) {
        box.innerHTML = `<span class="ad-tag">GOOGLE ADSENSE LIVE</span><div class="ad-copy">AdSense Unit Active (Client: <code>${safeHtml(cleanPub)}</code> · Slot: <code>${safeHtml(cleanSlot)}</code>)<ins class="adsbygoogle" style="display:block;min-height:28px" data-ad-client="${safeHtml(cleanPub)}" data-ad-slot="${safeHtml(cleanSlot)}" data-ad-format="auto" data-full-width-responsive="true"></ins></div><div class="ad-actions"><button type="button" class="ad-config-link" id="ad-banner-cfg">AdSense Settings</button></div>`;
        $('#ad-banner-cfg')?.addEventListener('click', () => goPage('revenue'));
        if (!document.getElementById('adsense-lib-script')) {
          const s = document.createElement('script');
          s.id = 'adsense-lib-script';
          s.async = true;
          s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(cleanPub)}`;
          s.crossOrigin = 'anonymous';
          document.head.appendChild(s);
        }
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
      } else {
        const targetUrl = (cfg.sponsorUrl || '#pdf-studio').trim();
        const isExternal = /^https?:\/\//i.test(targetUrl);
        box.innerHTML = `<span class="ad-tag">SPONSORED · AFFILIATE</span><div class="ad-copy"><b>${safeHtml(cfg.sponsorText)}</b></div><div class="ad-actions">${isExternal ? `<a href="${safeHtml(targetUrl)}" target="_blank" rel="noopener" class="ad-cta-btn" style="text-decoration:none">Visit Sponsor ↗</a>` : `<button type="button" class="ad-cta-btn" id="ad-banner-cta">Open PDF → QP Studio →</button>`}<button type="button" class="ad-config-link" id="ad-banner-cfg">Configure Ads</button></div>`;
        $('#ad-banner-cta')?.addEventListener('click', () => goPage(targetUrl.replace(/^#/, '') || 'pdf-studio'));
        $('#ad-banner-cfg')?.addEventListener('click', () => goPage('revenue'));
      }
    }
  }
  if ($('#pro-modal-price')) $('#pro-modal-price').textContent = cfg.proPrice || '₹49 / Semester Pack';
  if ($('#pro-modal-upi')) $('#pro-modal-upi').textContent = cfg.upiId || 'mechprep@upi';
  const rzpBtn = $('#pro-modal-razorpay-btn');
  if (rzpBtn) rzpBtn.href = cfg.razorpayUrl || 'https://razorpay.com/docs/payments/payment-button/';
}

$('#save-rev-config-btn')?.addEventListener('click', () => {
  const cfg = {
    adMode: $('#rev-ad-mode')?.value || 'preview',
    adsensePub: ($('#rev-adsense-pub')?.value || '').trim(),
    adsenseSlot: ($('#rev-adsense-slot')?.value || '').trim(),
    upiId: ($('#rev-upi-id')?.value || 'mechprep@upi').trim(),
    razorpayUrl: ($('#rev-razorpay-url')?.value || '').trim(),
    proPrice: ($('#rev-pro-price')?.value || '₹49 / Semester Pack').trim(),
    sponsorText: ($('#rev-sponsor-text')?.value || '').trim(),
    sponsorUrl: ($('#rev-sponsor-url')?.value || '#pdf-studio').trim()
  };
  try { localStorage.setItem('mechprep-revenue-config', JSON.stringify(cfg)); } catch {}
  applyRevenueUI(cfg);
  showToast('Revenue & Ad settings saved!');
});

$('#rev-adsense-pub')?.addEventListener('input', () => {
  const pub = ($('#rev-adsense-pub')?.value || 'pub-0000000000000000').trim().replace(/^ca-/, '');
  if ($('#adstxt-code-preview')) $('#adstxt-code-preview').textContent = `google.com, ${pub || 'pub-0000000000000000'}, DIRECT, f08c47fec0942fa0`;
});
$('#copy-adstxt-btn')?.addEventListener('click', () => {
  const txt = $('#adstxt-code-preview')?.textContent || 'google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0';
  try { navigator.clipboard.writeText(txt); } catch {}
  showToast('Copied ads.txt line to clipboard!');
});
$('#copy-adsense-tag-btn')?.addEventListener('click', () => {
  const pub = ($('#rev-adsense-pub')?.value || 'ca-pub-0000000000000000').trim();
  const slot = ($('#rev-adsense-slot')?.value || '1234567890').trim();
  const snippet = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pub}" crossorigin="anonymous"><\/script>\n<ins class="adsbygoogle" style="display:block" data-ad-client="${pub}" data-ad-slot="${slot}" data-ad-format="auto" data-full-width-responsive="true"></ins>\n<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>`;
  try { navigator.clipboard.writeText(snippet); } catch {}
  showToast('Copied Google AdSense HTML snippet!');
});
$('#download-adstxt-btn')?.addEventListener('click', () => {
  const pub = ($('#rev-adsense-pub')?.value || 'pub-0000000000000000').trim().replace(/^ca-/, '');
  const content = `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ads.txt';
  a.click();
  showToast('Downloaded ads.txt for Google AdSense!');
});

function updateRevenueEstimator() {
  const v = Number($('#est-visitors')?.value || 500);
  const pv = Number($('#est-pv')?.value || 8);
  const sales = Number($('#est-sales')?.value || 30);
  if ($('#est-visitors-val')) $('#est-visitors-val').textContent = v.toLocaleString();
  if ($('#est-pv-val')) $('#est-pv-val').textContent = pv;
  if ($('#est-sales-val')) $('#est-sales-val').textContent = sales;
  const monthlyViews = v * pv * 30;
  // Estimate ₹60 RPM ($0.72 RPM) + ₹49 per Pro pack sale
  const adRevInr = Math.round((monthlyViews / 1000) * 60);
  const salesRevInr = sales * 49;
  const totalInr = adRevInr + salesRevInr;
  if ($('#est-monthly-views')) $('#est-monthly-views').textContent = monthlyViews.toLocaleString();
  if ($('#est-monthly-inr')) $('#est-monthly-inr').textContent = `₹${totalInr.toLocaleString('en-IN')}`;
}
['#est-visitors', '#est-pv', '#est-sales'].forEach(sel => {
  $(sel)?.addEventListener('input', updateRevenueEstimator);
});

$('#open-pro-modal')?.addEventListener('click', () => $('#pro-modal')?.classList.remove('hidden'));
$('#preview-pro-modal-btn')?.addEventListener('click', () => $('#pro-modal')?.classList.remove('hidden'));
$('#close-pro-modal')?.addEventListener('click', () => $('#pro-modal')?.classList.add('hidden'));
$('#copy-upi-btn')?.addEventListener('click', () => {
  const upi = $('#pro-modal-upi')?.textContent || 'mechprep@upi';
  try { navigator.clipboard.writeText(upi); } catch {}
  showToast(`Copied UPI ID: ${upi}`);
});
$('#activate-demo-pro-btn')?.addEventListener('click', () => {
  const current = stored('mechprep-pro-unlocked', false);
  try { localStorage.setItem('mechprep-pro-unlocked', JSON.stringify(!current)); } catch {}
  loadRevenueConfig();
  $('#pro-modal')?.classList.add('hidden');
  showToast(!current ? '★ Pro Pass Activated! Ad banners hidden & Pro features unlocked.' : 'Switched back to standard student view.');
});

// Initialize new modules and load default sample into PDF Studio so it's immediately ready
updateCustomLibraryUI();
loadRevenueConfig();
updateRevenueEstimator();
if ($('#pdf-extracted-text') && !$('#pdf-extracted-text').value) {
  const p = PDF_PRESETS.kom;
  currentPdfFileName = p.name;
  $('#pdf-subject').value = p.subject;
  $('#pdf-course-header').value = p.courseHeader;
  $('#pdf-extracted-text').value = p.text;
  updatePdfCharCount();
  const initialPack = buildQuestionPackFromText(p.text, p.subject, 8, p.name);
  renderGeneratedWorkspace({
    id: 'PACK-DEMO',
    fileName: p.name,
    subjId: p.subject,
    chapterName: initialPack.chapterName,
    questionCount: initialPack.questions.length,
    questions: initialPack.questions,
    guideLesson: initialPack.guideLesson
  });
}
