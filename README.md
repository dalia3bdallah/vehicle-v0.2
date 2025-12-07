# Vehicle Details Page – React Assignment

This project is an implementation of the **Vehicle Details Page** based on the provided Figma design.  
The goal was to rebuild the layout using React with clean, reusable components and dummy data,
while matching the design visually and structurally.

--------------------------------------------------------


## Live Demo / Repo
- GitHub Repository: [https://github.com/dalia3bdallah/vehicle-v0.2]

- Live Demo : [https://dalia3bdallah.github.io/vehicle-v0.2]

--------------------------------------------------------


## 📦 Tech Stack
- React
- vite
- JavaScript 
- Tailwindcss
- SHADcn-ui  - Tabs 
             - bar chart 
             - breadcrumbs
- Apexcharts - Bar chart
- Dummy data            
- React-router-dom

--------------------------------------------------------
## How to Run the Project
# Install dependencies
npm install

# Start development server
npm run dev
--------------------------------------------------------
## 📁 Folder Structure & Component Breakdown
src/
│
├── components/
│   ├── page Vehicle details/
│   ├── top Header Bar/
│   ├── vehicle Top Details /
│   ├── Vehicle Tabs Bar /
│   ├── tab Test Content/
│   └── overview /   ← (active tab)
│       ├── Car Card/
│       ├── Insurance Card/
│       ├── Istmara/
│       ├── OwnerShip Card/
│       └── Right Column/
│           ├── KPIs cards/
│           ├── Monthly Utilization /
│           └── Income & Expenses /
│                ├── header/
│                └── chart /
│
├── Assets/
│
├── App.jsx
└── Index.jsx

--------------------------------------------------------

## style's Guide

# Breakpoints 

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }


# fonts
- main font : RadialTrial , sans-serif (optional) , size:16px 
- secondary font : "Boutros Ads" <= not available online


# Responsiveness
- Two-column layout collapses to one column on mobile/tablets.
- Different design for top Vehicle details in mobile/tablets
- scroll bar in tabs bar and top vehicle details bar in devices less than 1200px
- use rem with all text-sizes relative to root element (16px) with different breakpoints/devices



