<<<<<<< HEAD
# DevMasters Solution — Freelance Website (Ready-to-Deploy)

This project is a lightweight freelance website (frontend + backend) you can deploy to Render, Railway, or any Node host.

## What's included
- Express backend (server.js) that serves static files from `public/` and a `/contact` API to send messages via Nodemailer.
- Simple responsive frontend (HTML/CSS/JS) in `public/`.
- `.env.example` with environment variables for email.

## Quick start (local)
1. Copy `.env.example` to `.env` and fill values:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
RECEIVER_EMAIL=sagar732002@gmail.com
```
2. Install dependencies:
```
cd backend
npm install
```
3. Start server:
```
npm run dev
```
4. Open `http://localhost:5000` in your browser.

## Deploy to Render (recommended free-tier)
1. Create a GitHub repo and push the project root (contains backend/server.js and public/).
2. Sign in to Render and create a new **Web Service** connected to your repo.
3. Set Environment variables in Render (EMAIL_USER, EMAIL_PASS, RECEIVER_EMAIL, PORT).
4. Build/Start command: `npm install` and `Start Command`: `node server.js`.
5. Deploy — Render will give you an HTTPS URL.

## Gmail notes
- For Gmail, generate an **App Password** (Google Account → Security → App Passwords) and set it as `EMAIL_PASS`.

## Next steps
- Replace placeholder portfolio items with your projects.
- Add analytics (Google Analytics) and Search Console verification.
- Add Terms & Privacy pages and link in footer.
=======
# Devmasters-solution
Freelance full-stack developer portfolio website
DevMasters Solution – Freelance Full-Stack Developer Portfolio
Building Modern Websites That Convert

📌 Overview
DevMasters Solution is my personal freelance portfolio and business website, showcasing my skills as a Full-Stack Web Developer.
It is designed to highlight my services, past projects, and client testimonials while allowing potential clients to contact me directly.

🚀 Features
Modern & responsive design (HTML5, CSS3, JavaScript)

Backend with Node.js + Express for form handling

SEO-friendly structure for better Google ranking

Contact form with email integration

SSL-ready deployment for security

Optimized for speed and mobile devices

🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript

Backend: Node.js, Express

Hosting: Render (Free SSL + Auto Deploy)

Version Control: Git & GitHub

📬 Contact Me
📧 Email: sagar732002@gmail.com
🌐 Website: Coming Soon
💼 Services: Full-stack website development, e-commerce solutions, SEO optimization, and more.
>>>>>>> 135cdd57c52397c5269f2c8b269527c6887414e8
