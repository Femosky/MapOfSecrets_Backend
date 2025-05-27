# MapOfSecrets Backend

[![License](https://img.shields.io/github/license/Femosky/MapOfSecrets_Backend.svg)](LICENSE) ![Last Commit](https://img.shields.io/github/last-commit/Femosky/MapOfSecrets_Backend.svg) ![Issues](https://img.shields.io/github/issues/Femosky/MapOfSecrets_Backend.svg)  

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

---

## 📥 Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Femosky/MapOfSecrets_Backend.git
   cd MapOfSecrets_Backend
   
2. **Install Node**
   - Refer to this doc to properly install node on your computer -> [Install](https://nodejs.org/en/download)
   - Check if node if installed; if installed, it should print the version number
   ```bash
   node -v

3. **Install dependencies**  
   ```bash
   npm install

4. **Configure environment variables**
   - Copy `.env.example` → `.env` and fill in:
   - Create and use it in a `.env` file in the project root with:
   ```bash
   DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB_NAME
   PORT=4000

5. **Initialize database**
   ```bash
   npx prisma migrate dev   # run migrations
   npx prisma db seed       # optional seed data

6. **Run Prisma Studio to view database**
   ```bash
   npx prisma studio
   
7. **Run in development**
   ```bash
   npm run dev

8. **Build for production**
   ```bash
   npm run build
   npm start

## 📂 Project Structure

| Path                      | Description                                        |
| ------------------------- | -------------------------------------------------- |
| **prisma/**               | Prisma orm directory                               |
| **prisma/schema.prisma**  | Prisma schema                                      |
| **src/**                  | Application source code directory                  |
| **src/routes/**           | Express route definitions                          |
| **src/models/**           | Typescript interface definitions                   |
| **src/helpers/**          | Helpers - utility global functions                 |
| **src/index.ts**          | Express app setup (middleware, docs, routes)       |
| **.env.example**          | Env var template                                   |
| **package.json**          | Scripts & dependencies                             |
| **tsconfig.json**         | TypeScript configuration                           |
| **README.md**             | Project overview & setup instructions              |

## 📄 License

Distributed under the MIT License. See LICENSE for more details.

## ✉️ Contact

[Contact me here](https://femiojeyemi.com/contact)
