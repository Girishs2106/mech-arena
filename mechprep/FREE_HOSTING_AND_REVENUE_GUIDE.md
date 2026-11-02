# MechPrep Arena — Free Hosting & Revenue Setup Guide

## 1. What Was Upgraded in Your Website
- **PDF → Question Paper (QP) & Study Guide Studio (`#pdf-studio`)**:
  - Upload any PDF handout, syllabus, or question bank directly in the browser using `PDF.js` (or use the server `/api/generate-from-pdf` endpoint with Gemini 3.1 Flash-Lite / Ollama).
  - Auto-generates **Interactive MCQs**, a **Structured Study Guide Module**, and a **Printable University Question Paper (QP)** with a toggleable **Answer Key & Marking Scheme**.
  - Newly generated questions and guides save directly into the live Practice Bank (`Uploaded PDF Pack`) and Study Guide, and can be exported as `custom-pdf-pack.js` to bundle permanently for all visitors.
- **Revenue & Monetization Suite (`#revenue` & Pro Modal)**:
  - **Google AdSense Integration**: Pre-wired top banner and `/ads.txt` support.
  - **UPI / Razorpay Student Pro Pass Modal**: Let students unlock solved semester QP bundles via UPI ID or [Razorpay Payment Button](https://razorpay.com/docs/payments/payment-button/).
  - **Monthly Revenue Calculator** & live AdSense / Sponsor configuration panel.

## 2. How to Host Online for FREE ($0/month)

### Option A: Render.com (Recommended for Full Node.js + Gemini AI Server)
1. Upload the `mechprep` folder to a GitHub repository.
2. Sign up at [Render](https://render.com/docs/free) and click **New + → Web Service**.
3. Connect your GitHub repository. Render reads `render.yaml` / `package.json` (`node server.js`).
4. (Optional) Add `GEMINI_API_KEY` in Render Environment Variables to enable cloud AI PDF generation and tutoring.
5. Click **Create Web Service** — your site goes live with free HTTPS!

### Option B: Vercel or Netlify (Instant Free Static Hosting)
1. Sign up at [Vercel](https://vercel.com/docs/deployments) or Netlify.
2. Import your repository or drag-and-drop the `mechprep` folder (`vercel.json` and `netlify.toml` point automatically to `public/`).
3. Because PDF parsing (`PDF.js`) and question generation also run client-side in the browser, the entire app works 100% free on static hosting too!
