# MapOfSecrets Backend

[![License](https://img.shields.io/github/license/Femosky/MapOfSecrets_Backend.svg)](LICENSE)  
![Last Commit](https://img.shields.io/github/last-commit/Femosky/MapOfSecrets_Backend.svg)  
![Issues](https://img.shields.io/github/issues/Femosky/MapOfSecrets_Backend.svg)  

A RESTful API backend for the MapOfSecrets app—storing and serving anonymous, location-tied secrets via Express.js and Prisma.

---

## 🚀 Live API

**Base URL:** [Click here](https://api-mapofsecrets.femiojeyemi.com)

> _(Replace with your actual EC2 endpoint or custom domain.)_

---

## ✨ Features

- **Create & Fetch Secrets**  
  POST new secrets with location data; GET secrets filtered by a Google defined administrative level (state/province) place id.  
- **Prisma ORM**  
  Type-safe database interactions, migrations & seeding.  
- **PostgreSQL on AWS RDS**  
  Production-ready data storage, secured via `.env`-driven credentials.  
- **Swagger Documentation**  
  Interactive API docs available at `/api-docs`.  
- **Input Validation & Error Handling**  
  Clean request schemas and centralized error middleware.  
- **CORS & Rate-Limiting**  
  Configurable CORS policies and basic rate-limiting setup.

---

## 🛠 Tech Stack

- **Runtime & Framework**: Node.js, Express.js  
- **ORM**: Prisma  
- **Database**: PostgreSQL (AWS RDS)  
- **Docs**: Swagger / OpenAPI  
- **Deployment**: AWS EC2  
- **Env Management**: dotenv

---

## 📥 Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Femosky/MapOfSecrets_Backend.git
   cd MapOfSecrets_Backend

2. **Install NPM and all required dependencies**  
   ```bash
   npm install
   npm install tailwindcss @tailwindcss/vite
   npm install tailwind-merge
   npm install lucide-react
   npm install framer-motion
   npm install date-fns
   npm i -g vercel
   npm i @vercel/analytics
   npm i @react-google-maps/api
   npm i @googlemaps/markerclusterer

3. **Configure environment variables**
   - You need to get a google maps api key from [here](https://mapsplatform.google.com) first.
   - Create and use it in a `.env` file in the project root with:
   ```bash
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

5. **Run in development mode**
   ```bash
   npm run dev

6. **Build for production**
   ```bash
   npm build run

## 📂 Project Structure

| Name                   | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| **public/**            | Static assets (favicon)                                 |
| **src/**               | Source code files                                       |
| **src/components**     | React UI components (Map, etc.)                         |
| **src/contexts**       | React context providers                                 |
| **src/hooks**          | Custom React hooks (useMap, useNotes, etc.)             |
| **src/models**         | Map Typescript Interfaces                               |
| **src/utils**          | Utility functions (API calls, formatting)               |
| **src/App.tsx/**       | Root React component                                    |
| **src/main.tsx**       | React entry point                                       |
| **package.json/**      | Dependencies & npm scripts                              |
| **tsconfig.json/**     | TypeScript configuration                                |
| **vite.config.json/**  | Vite build settings                                     |
| **.env/**              | Environment variable definitions                        |

## 📄 License

Distributed under the MIT License. See LICENSE for more details.

## ✉️ Contact

[Contact me here](https://femiojeyemi.com/contact)
