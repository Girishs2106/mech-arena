# MechPrep Arena — Local Mechanical Learning Studio

MechPrep is a local-first, responsive learning and timed-practice app. The guide, practice bank and saved progress are kept on your computer. No account or external study website is required for normal use.

## What's included

- **15 visual study chapters plus 91 source-based mini-lessons:** Engineering Mathematics, General Aptitude, Engineering Mechanics, Strength of Materials, Materials and Metallurgy, Theory of Machines and Vibrations, Machine Design, Thermodynamics, Fluid Mechanics and Machinery, Heat Transfer, Manufacturing, Metrology and Quality, Industrial Engineering, Cross-core Engineering Basics, and CAD/CAE. Added lessons cover the supplied mechanical papers and quantitative, logical-reasoning and verbal modules.
- **Study tools in each chapter:** syllabus map, animated SVG concept, core idea, larger readable formula desk, derivation or solving route, worked examples, applications, shortcuts, common mistakes, and source references to the supplied PDFs.
- **Practice:** 1,790 generated question variants across Mechanical, Quantitative Aptitude, Logical Reasoning, Cryptarithmetic, Verbal Ability and train problems, 191 answerable General Aptitude questions filtered from your MadeEasy archive, 31 original core questions, and 32 Semester 3 course questions: 2,044 questions total. The Semester 3 pack covers Kinematics of Machines, Fluid Mechanics, Foundry/Forging Lab, selected Mechanics of Materials and Thermodynamics concepts, CAMD exam structure, and Taylor expansion. New questions include worked steps and identify their source topic/PDF in the answer review.
- **Scoring and timing:** configurable short/integer-answer marks and worked-problem marks (defaults 2 and 4), an adjustable Technical/Aptitude question mix (default 80/20), local animated SVG problem explainers, optional AI tutor explanations at test review, and a per-test marks-by-topic graph; time tracked separately for each question, per-question right/wrong and earned-mark review, and graphs for marks, accuracy, average seconds per question, and right versus wrong answers.
- **Progress:** chapter completion, local test history, and score graphs after two completed tests. Longer practice sessions support up to 100 questions and 90 minutes.
- **Offline study helper:** searches the included guide and returns a chapter-specific solution approach without a network connection.
- **Optional free-tier API tutor:** Gemini 3.1 Flash-Lite through the server, using the free tier when your Google AI Studio project is eligible and remains on its free tier. The API key stays in `.env`, never in the page.
- **Optional local AI:** connect Ollama for open-ended tutoring without sending prompts to a cloud provider.

## Start on Windows

1. Extract this ZIP.
2. Install Node.js 18 or newer if needed.
3. Open the extracted `mechprep` folder. In File Explorer's address bar, type `powershell` and press Enter.
4. Run `npm start`.
5. Open `http://localhost:3000` in your browser.

The guide, question bank and built-in study helper work without an API key or internet connection. You can also open `public/index.html` directly; for full browser compatibility, the local server is recommended.

### Optional: enable the Gemini free-tier API

1. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/apikey).
2. Copy `.env.example` to `.env` in the `mechprep` folder.
3. Put the key after `GEMINI_API_KEY=` and save the file.
4. Restart MechPrep with `npm start`.

The app uses the configured Flash-Lite model and does not enable web-search grounding. Google currently lists free input and output for this model on its Free tier, but free-tier access and limits depend on the project/account and can change. Keep the project on the Free tier—do not enable billing if you want to avoid charges. Google states that content sent through the Free tier may be used to improve its products, so do not send private or sensitive information. If the free tier is unavailable, the offline study helper still works.

### Optional: enable a local AI model

Install Ollama, then run `ollama pull qwen2.5:3b` once and leave Ollama running. MechPrep can send tutor requests to `http://127.0.0.1:11434`. This uses local compute and has no per-question API charge; model download and computer storage are required. The app works without Ollama.

To access the site on a phone on the same Wi-Fi network, leave the server running and open `http://YOUR-LAPTOP-IP:3000` on the phone. Progress is stored separately in each browser.

## About the supplied archives

The MadeEasy archive contained 1,649 total questions, mostly Computer Science. It contained 197 General Aptitude items, of which 191 had a supported answer and were imported. Six multi-select answers could not be decoded with the notes included in the archive. The question export had no worked solutions; the local handbook provides the solving methods. Rows labeled with the `MECHANICAL ENGINEERING` topic were still categorized as General Aptitude, so the archive did not provide a reliable mechanical technical question bank. Mechanical study content in this project is original handbook material and original practice questions.

The archive included no license information. The filtered question set is included only in this local project for the user's study. The Chromium DevTools archive is unrelated developer-tools source code, so it is not copied into MechPrep.

The additional handout sources included the QA & LR Trainer and Student Handout V3 PDFs, plus the supplied Thermodynamics, Fluid Mechanics, Strength of Materials, Manufacturing Processes, Machine Design and Industrial Engineering aptitude PDFs. The app creates new practice variants from the topics and formulas; source question wording is not copied wholesale. The added third-semester Drive course material is referenced in the Semester 3 lessons and question explanations. The train-problem lesson follows the supplied aptitude handout section on trains/relative speed (printed page 62) and includes passing-a-pole, platform/tunnel, and two-train worked examples. The nine placement scans and TCS trainer PDFs are not yet incorporated; they need a reliable scan/text review before adding their exact exam pattern and question topics. Programming and computer-science handouts were intentionally left out. The KOM and Fluid Mechanics banks were text-extracted; the Foundry/Forging lab manual and CAMD paper were readable; scanned BTD/MOM pages were used only where visually legible. The machine-shop manual cover identifies it as V Semester, so verify that it belongs in this study plan. The 22ME36L folder contains a manual printed as ME37L; verify that course-code discrepancy with your instructor. Scanned Math/MOM/BTD documents were not treated as fully searchable, and no full scans or textbooks were copied into the app.

## Scope

The handbook is a broad study companion, not a substitute for a formal syllabus, textbook or instructor. It aims for wide Mechanical Engineering coverage with light cross-core content and General Aptitude. Check assumptions, units and exam-specific conventions in your course material.
