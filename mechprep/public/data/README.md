# Local learning data

`guide-data.js` is the app's original offline mechanical and aptitude handbook. Each chapter contains syllabus coverage, core idea, formulas, derivation, applications, shortcuts and common traps.

`aptitude-bank.js` contains 191 General Aptitude questions filtered from the user's provided MadeEasy test-series archive. Answer decoding uses the mapping table in that archive's `Knowledge/Data_Decoding.md`; question and option markup was sanitized. Inline PNG/JPEG/GIF/WebP figures are kept in the local JavaScript data file. Remote figures are shown as an unavailable-offline marker. The archive's analysis notes report that worked solutions were empty, so MechPrep uses its own chapter methods for offline explanations.

No source scripts from either ZIP are executed by MechPrep. The Chromium DevTools source archive is not part of the app.
