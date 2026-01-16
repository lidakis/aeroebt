# AeroEBT Website

A modern, enterprise-grade static website for SkyDynamics' AeroEBT aviation training platform. Built with React, TypeScript, Redux Toolkit, and Framer Motion.

## Features

- **Modern Stack**: React 18, TypeScript, Vite, Redux Toolkit
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices
- **Static Deployment**: Optimized for GitHub Pages hosting
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Code splitting, lazy loading, and optimized assets

## Pages

- **Home**: Hero section, solutions overview, features, stats, and CTA
- **AeroEBT**: Evidence-Based Training product page with features and competencies
- **AeroBrain**: AI-powered analytics platform showcase
- **TMS**: Training Management System with modules and benefits
- **FSMS**: Flight School Management System with workflow steps
- **About**: Company story, values, timeline, and mission
- **Plans**: Pricing tiers with feature comparison
- **Contact**: Demo request form and contact information
- **FAQ**: Accordion-style frequently asked questions

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Deployment to GitHub Pages

```bash
# Build and deploy
yarn deploy
```

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── CookieConsent.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── AeroEBT.tsx
│   ├── AeroBrain.tsx
│   ├── TMS.tsx
│   ├── FSMS.tsx
│   ├── About.tsx
│   ├── Plans.tsx
│   ├── Contact.tsx
│   └── FAQ.tsx
├── store/            # Redux store
│   ├── index.ts
│   ├── hooks.ts
│   └── slices/
├── styles/           # Global styles
│   └── index.css
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Design System

The website uses a custom design system with CSS variables:

- **Colors**: Aviation-inspired blue palette with cyan accents
- **Typography**: Syne (display) and Outfit (body) fonts
- **Spacing**: 8px base unit scale
- **Animations**: Smooth 250ms transitions

## License

Copyright 2024 SkyDynamics G.P. All rights reserved.
