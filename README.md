# Portfolio Risk Engine Frontend

A modern Angular frontend for the Portfolio Risk Engine. This application provides the user interface for viewing portfolio data, market insights, and risk-related analysis in a clear and responsive dashboard.

## Overview

This project is the frontend layer of a portfolio analysis system. It connects to the backend API and presents portfolio information, asset data, and related calculations in a browser-based interface.

This frontend is designed to work together with the backend repository:

- Backend repo: https://github.com/S7120f/Portfolio-Risk-Engine-API

## Tech Stack

- Angular 21
- TypeScript
- RxJS
- Angular Material
- HTML / SCSS
- Vitest

## Project Structure

```text
Portfolio-Risk-Engine-FRONT/
├── portfolio-risk-engine-front/   # Angular application
│   ├── src/
│   ├── public/
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── README.md
├── pom.xml
├── mvnw
├── mvnw.cmd
├── .gitignore
└── .gitattributes
```

## Prerequisites

Before running the app, make sure you have:

- Node.js 18+
- npm
- Angular CLI (optional, but useful for local development)
- The backend project running locally

## Backend Setup

The frontend depends on the backend API from the repository below:

```bash
git clone https://github.com/S7120f/Portfolio-Risk-Engine-API.git
cd Portfolio-Risk-Engine-API
./mvnw spring-boot:run
```

The backend usually runs on:

```text
http://localhost:8080
```

## Frontend Setup

### 1. Open the frontend app folder

```bash
cd portfolio-risk-engine-front
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Then open your browser at:

```text
http://localhost:4200
```

## Available Scripts

```bash
npm start       # run the Angular dev server
npm run build   # create a production build
npm test        # run unit tests
npm run watch   # watch mode for development builds
```

## Build for Production

```bash
npm run build
```

The build output will be generated in the `dist/` folder.

## Testing

```bash
npm test
```

This project uses Vitest for unit testing.

## Purpose

The frontend is designed to give users a clean and interactive view of portfolio performance and risk analysis, making it easier to understand financial trends and assess portfolio health.

## Notes

This repository contains the frontend portion of the larger Portfolio Risk Engine system. The backend API and data services are expected to be connected separately.

The full application consists of:

- Frontend: https://github.com/S7120f/Portfolio-Risk-Engine-FRONT
- Backend: https://github.com/S7120f/Portfolio-Risk-Engine-API
