# 🏥 NPI Finder

<div align="center">

![NPI Finder](https://img.shields.io/badge/NPI-Finder-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)

**A fast, modern web app for searching National Provider Identifier (NPI) numbers of US healthcare providers.**

[🚀 Live Demo](https://npi-finder.vercel.app) · [🐛 Report Bug](https://github.com/PriyanshuPatel-24/NPI-Finder/issues) · [✨ Request Feature](https://github.com/PriyanshuPatel-24/NPI-Finder/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

NPI Finder is a production-ready web application that helps **medical coders**, **healthcare administrators**, and **billing professionals** quickly look up National Provider Identifier (NPI) numbers using the official CMS NPPES Registry API.

Simply enter a provider's name, credential (MD, NP, PA, etc.), and state — and get instant, accurate NPI results with a copy-to-clipboard feature.

---

## ✨ Features

- 🔍 **Real-time NPI Search** — Powered by the official [NPPES NPI Registry API](https://npiregistry.cms.hhs.gov/api-page)
- 🎯 **Match Accuracy Scoring** — Providers are ranked by relevance to your search query
- 📋 **One-click Copy** — Copy any NPI number to clipboard instantly
- 🌙 **Dark Mode** — Full dark/light mode support with glassmorphism UI
- ⚡ **Bulk Finder** — Upload or paste multiple provider names for batch NPI lookups (authenticated users)
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- 🔐 **Google Authentication** — Sign in with Google to access advanced features (Firebase)
- 🌐 **CORS-free on Vercel** — Uses a serverless proxy function to call the NPPES API from the server

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6 |
| Styling | Tailwind CSS 3 with glassmorphism |
| Build Tool | Vite 5 |
| Auth | Firebase (Google Sign-in) |
| API | CMS NPPES NPI Registry |
| Hosting | Vercel (with serverless proxy) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PriyanshuPatel-24/NPI-Finder.git
cd NPI-Finder

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

> ⚙️ In development, Vite proxies `/api/npi-proxy` → NPPES API to avoid CORS.  
> In production on Vercel, `api/npi-proxy.js` handles this as a serverless function.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
npi-finder/
├── api/
│   └── npi-proxy.js          # Vercel serverless proxy for NPPES API
├── src/
│   ├── api/
│   │   └── npiRegistry.js    # NPI search logic & NPPES API client
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HomeSection.jsx   # Main search form
│   │   ├── SearchResults.jsx # Results display (single & multiple)
│   │   ├── AboutUs.jsx
│   │   ├── Contribute.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   └── HowItWorks.jsx
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode context
│   ├── data/
│   │   └── stateCodes.js     # US state code mappings
│   └── pages/
│       ├── LandingPage.jsx
│       ├── BulkFinderPage.jsx
│       ├── ContributePage.jsx
│       └── ContactPage.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ☁️ Deployment

This project is optimized for **Vercel** deployment.

### Deploy to Vercel

1. Fork this repository
2. Import it in [Vercel Dashboard](https://vercel.com/new)
3. Leave all settings as default — Vercel auto-detects Vite
4. Click **Deploy**

The `api/npi-proxy.js` file is automatically detected as a Vercel serverless function.

> **Why the proxy?** The browser cannot call `npiregistry.cms.hhs.gov` directly due to CORS restrictions. The serverless function fetches on the server side and returns results to the browser.

---

## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/PriyanshuPatel-24">
        <img src="https://github.com/PriyanshuPatel-24.png" width="80px;" alt="Priyanshu Patel"/><br />
        <sub><b>Priyanshu Patel</b></sub>
      </a><br />
      <sub>Project Creator & Lead Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/jaysinhdabhi">
        <img src="https://github.com/jaysinhdabhi.png" width="80px;" alt="Jaysinh Dabhi"/><br />
        <sub><b>Jaysinh Dabhi</b></sub>
      </a><br />
      <sub>Sr. Front-End Developer & UI/UX</sub>
    </td>
  </tr>
</table>

---

## 🤝 Contributing

Contributions are what make open source great! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

You can also open an [issue](https://github.com/PriyanshuPatel-24/NPI-Finder/issues) for bug reports or feature requests.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ for the healthcare community
  <br />
  <a href="https://github.com/PriyanshuPatel-24/NPI-Finder">⭐ Star this project if you found it helpful!</a>
</div>
