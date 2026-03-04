# NPI Finder

A professional React.js web application for finding healthcare provider NPI (National Provider Identifier) numbers. Designed for medical coders and healthcare administrators to streamline their workflow.

## Project Overview

NPI Finder is a React.js web app that lets medical coders search for healthcare provider NPI numbers by name, credential, and state. It uses the **official CMS NPI Registry (NPPES) API** for live data.

## Features

- **Real NPI search**: Uses the [NPPES API](https://npiregistry.cms.hhs.gov/api-page) (no mock data)
- **Search by**: Full name, credential (MD, DO, NP, PA, etc.), and state with type-ahead suggestions
- **Results**: Single or multiple matches with match percentage, NPI number, and copy-to-clipboard
- **Responsive layout** and smooth scroll navigation

## Technology Stack

- **React.js 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features

## Project Structure

```
npi-finder/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   ├── HomeSection.jsx     # Main search form and hero section
│   │   ├── SearchResults.jsx   # Results display component
│   │   ├── HowItWorks.jsx      # How it works section
│   │   ├── AboutUs.jsx         # About us section
│   │   ├── Support.jsx          # Support section
│   │   ├── ContactUs.jsx       # Contact form section
│   │   └── Footer.jsx           # Footer component
│   ├── api/
│   │   └── npiRegistry.js       # NPPES API client
│   ├── data/
│   │   └── stateCodes.js        # US state name/code mapping
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd npi-finder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

## Usage

1. **Search for NPI:**
   - Enter the provider's **full name** (required)
   - Type **credential** (e.g. MD, NP, PA) and pick from suggestions (required)
   - Type **state** and pick from suggestions (required)
   - Optionally enter address to narrow results
   - Click **Find NPI**

2. **View Results:**
   - **Single match**: One card with NPI, match %, and copy button
   - **Multiple matches**: Table with provider name, credential, state, NPI (with copy button), and match %
   - Copy button copies that row’s NPI to the clipboard

3. **Navigate:** Use the top nav to scroll to How It Works, About Us, Support, Contact Us.

## Real API (NPPES)

The app calls the **CMS NPI Registry API** (`https://npiregistry.cms.hhs.gov/api/?version=2.1`).

- **Development:** Vite proxies `/npi-api` to the NPPES API to avoid CORS.
- **Production:** The app calls the NPPES API directly. If the browser blocks the request (CORS), run the app behind a server that proxies `/npi-api` to `https://npiregistry.cms.hhs.gov/api`.

**NPPES API docs:** https://npiregistry.cms.hhs.gov/api-page

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. To preview the production build:

```bash
npm run preview
```

## Key Features Explained

### Form Validation
- Required fields are validated before submission
- Real-time error messages guide users
- Visual feedback for form errors

### Copy-to-Clipboard
- Uses the Clipboard API for reliable copying
- Visual feedback when NPI is copied
- Works across all modern browsers

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface elements

### Smooth Scrolling
- CSS-based smooth scroll behavior
- JavaScript-based section navigation
- Fixed navigation bar for easy access

## College Presentation Notes

### Technical Highlights
- Modern React.js with functional components and hooks
- Clean component architecture with separation of concerns
- Production-ready UI/UX design
- Scalable code structure for future enhancements

### Project Purpose
- Demonstrates understanding of frontend development
- Shows ability to design for future backend integration
- Highlights healthcare industry application knowledge
- Showcases professional UI/UX design skills

### Future Enhancements
- User authentication and saved searches
- Advanced filtering (taxonomy/specialty)
- Export search results
- Provider profile pages

## License

This project is for educational and evaluation purposes.

## Author

Built by Superior

---

**Note:** This app uses the official CMS NPI Registry (NPPES) API for live provider data.
