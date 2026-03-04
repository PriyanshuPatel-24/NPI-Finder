# NPI Finder - College Demo Guide

## Quick Demo Instructions

This guide helps you demonstrate the NPI Finder application to your college mentor.

## 10 Registered Providers for Demo

### 1. **Dr. Sarah Elizabeth Johnson**
- **Credential:** MD
- **State:** California
- **NPI:** 1876543210
- **Address:** 1245 Medical Center Drive, Suite 200, Los Angeles, CA 90024
- **Demo Search:** "Sarah Johnson" + MD + California

### 2. **Dr. Michael Robert Chen**
- **Credential:** MD
- **State:** New York
- **NPI:** 1987654321
- **Address:** 850 Park Avenue, 3rd Floor, New York, NY 10021
- **Demo Search:** "Michael Chen" + MD + New York

### 3. **Dr. Emily Grace Williams**
- **Credential:** DO
- **State:** Texas
- **NPI:** 1765432109
- **Address:** 3200 Main Street, Building A, Houston, TX 77002
- **Demo Search:** "Emily Williams" + DO + Texas

### 4. **Dr. James Patrick O'Brien**
- **Credential:** MD
- **State:** Florida
- **NPI:** 1654321098
- **Address:** 1500 Ocean Drive, Suite 405, Miami Beach, FL 33139
- **Demo Search:** "James O'Brien" + MD + Florida

### 5. **Patricia Ann Martinez**
- **Credential:** NP
- **State:** Illinois
- **NPI:** 1543210987
- **Address:** 225 E Chicago Avenue, Suite 100, Chicago, IL 60611
- **Demo Search:** "Patricia Martinez" + NP + Illinois

### 6. **Dr. David Michael Thompson**
- **Credential:** MD
- **State:** Massachusetts
- **NPI:** 1432109876
- **Address:** 75 Francis Street, Brigham and Women's Hospital, Boston, MA 02115
- **Demo Search:** "David Thompson" + MD + Massachusetts

### 7. **Dr. Lisa Marie Anderson**
- **Credential:** DO
- **State:** Pennsylvania
- **NPI:** 1321098765
- **Address:** 3400 Spruce Street, 1 Silverstein Pavilion, Philadelphia, PA 19104
- **Demo Search:** "Lisa Anderson" + DO + Pennsylvania

### 8. **Robert James Taylor**
- **Credential:** PA
- **State:** Georgia
- **NPI:** 1210987654
- **Address:** 1365 Clifton Road NE, Suite 1400, Atlanta, GA 30322
- **Demo Search:** "Robert Taylor" + PA + Georgia

### 9. **Dr. Jennifer Lynn Rodriguez**
- **Credential:** MD
- **State:** Washington
- **NPI:** 1109876543
- **Address:** 1959 NE Pacific Street, Box 356340, Seattle, WA 98195
- **Demo Search:** "Jennifer Rodriguez" + MD + Washington

### 10. **Dr. Christopher Mark Davis**
- **Credential:** MD
- **State:** North Carolina
- **NPI:** 1098765432
- **Address:** 101 Manning Drive, UNC Hospitals, Chapel Hill, NC 27514
- **Demo Search:** "Christopher Davis" + MD + North Carolina

## Demo Scenarios

### Scenario 1: Single Match (Perfect Match)
**Search:**
- Name: "Sarah Johnson"
- Credential: MD
- State: California

**Expected Result:** Single provider displayed with NPI number 1876543210 and 98% match accuracy.

### Scenario 2: Partial Name Match
**Search:**
- Name: "Michael"
- Credential: MD
- State: New York

**Expected Result:** Single provider "Dr. Michael Robert Chen" with NPI 1987654321.

### Scenario 3: Multiple Credentials (Same Name)
**Search:**
- Name: "Sarah"
- Credential: (leave blank or try different credentials)
- State: California

**Expected Result:** Shows matching providers based on credential selection.

### Scenario 4: Different States
**Search:**
- Name: "Jennifer Rodriguez"
- Credential: MD
- State: Washington

**Expected Result:** Single provider with NPI 1109876543.

## Key Features to Demonstrate

1. **Form Validation:** Show that required fields (Name, Credential, State) must be filled
2. **Search Results:** Show how results appear below the search button
3. **Copy Functionality:** Click the copy button to copy NPI number to clipboard
4. **Match Accuracy:** Explain the percentage shows confidence level
5. **Responsive Design:** Resize browser window to show mobile responsiveness
6. **Navigation:** Use the navigation bar to scroll to different sections

## Presentation Talking Points

1. **Purpose:** "This application helps medical coders quickly find NPI numbers for healthcare providers."

2. **How It Works:** 
   - "Users enter provider details"
   - "The system searches the CMS NPI Registry"
   - "Results show with match accuracy scores"

3. **Future Integration:**
   - "Currently uses mock data for demonstration"
   - "In production, would connect to the official CMS NPI Registry API"
   - "The UI is production-ready and scalable"

4. **Technical Highlights:**
   - "Built with React.js and Vite"
   - "Styled with Tailwind CSS"
   - "Responsive design for all devices"
   - "Copy-to-clipboard functionality"

## Troubleshooting

- **No Results:** Make sure you're using the exact names from the list above
- **Partial Names Work:** You can search with just first name or last name
- **State Matching:** State names are case-insensitive
- **Credential Required:** Must select a credential type for best results

## Notes for Mentor

- All provider data is simulated for demonstration purposes
- NPI numbers are mock data (10-digit format)
- In production, this would query the official CMS NPPES database
- The application demonstrates frontend development skills and UI/UX design
