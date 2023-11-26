# EasySwap Widget

#### Live Demo: [Click Here](https://typeguru-jazzdev.vercel.app/)

## Table of Contents

- [Getting Started](#getting-started)
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

### Getting Started

To begin utilizing EasySwap Widget, start by exploring the live demo [here](https://typeguru-jazzdev.vercel.app/).

## Introduction

EasySwap Widget is a simple web application designed to fetch and display the price and hourly change in percentage of BTC, ETH, BNB, and Tron.

## Features

Below are the key features of EasySwap Widget:

- **Live Price Data:** Get real-time price data for BTC, ETH, BNB, and Tron.
- **Hourly Change Percentage:** Display the hourly change percentage for each coin.
- **Responsive Design:** Available on desktop only.

## Technologies Used

List of technologies, frameworks, and libraries used in this project.

<div style="display: flex; justify-content: center; align-items: baseline; gap: 30px; margin-bottom: 40px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="100" height="100">
  <img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Vite" width="100" height="100">
  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS" width="100" height="100">
  <img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" alt="React Query" width="100" height="100">
  <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="Framer Motion" width="100" height="100">
</div>

### This `React` project is initialized using `Vite` as the build tool, and the styling is implemented with `TailwindCSS`. For efficient data fetching, `React Query` is utilized, while the project's animations are powered by `Framer Motion`.

## Installation

To run this project locally, follow these steps:

- ### Fork the Repository

Fork the repository by clicking the "Fork" button at the top right of the repo page. This will create a copy of the repository under your GitHub account.

- ### Clone the Forked Repository

Next, clone your forked repository locally by running:

```bash
git clone https://github.com/your-username/eazyswap-widget.git
```

- ### Create a `.env.local` file

Navigate to the project's root directory and create a new `.env.local` file:

```bash
cd eazyswap-widget
touch .env.local
```

- ### Create a new firebase app

Create a new firebase web application and update the your `.env` file with the configuration details.

- ### Edit the `.env` File

Open the .env file in a text editor of your choice and add the necessary environment variables:

```ini
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

- ## Folder Structure

  ```
  project-root/
  │
  ├── font/
  │ ├── CascadiaCode-Light.otf
  │ ├── CascadiaMono-Italic.otf
  │ └── ...
  │
  ├── node_modules/
  │ ├── .bin
  │ ├── .vite
  │ └── ...
  │
  ├── public/
  │ ├── android-chrome-192x192.png
  │ ├── android-chrome-512x512.png
  │ ├── apple-touch-icon.png
  │ ├── favicon-16x16.png
  │ ├── favicon-32x32.png
  │ ├── favicon.ico
  │ ├── site.webmanifest
  │ └── ...
  │
  ├── src/
  │ ├── api/
  │ │ ├── getCoins.js
  │ │ └── ...
  │ ├── assets/
  │ │ ├── getCoins.js
  │ │ └── ...
  │ ├── conponents/
  │ │ ├── Error/
  │ │ │ ├── Error404.jsx
  │ │ │ └── ...
  │ │ ├── Home/
  │ │ │ ├── Home.jsx
  │ │ │ ├── LoadingWidget.jsx
  │ │ │ ├── WidgetCard.jsx
  │ │ │ └── ...
  │ │ ├── Layout/
  │ │ │ ├── Layout.jsx
  │ │ │ └── ...
  │ │ ├── Signin/
  │ │ │ ├── SignIn.jsx
  │ │ │ └── ...
  │ │ └── ...
  │ ├── context/
  │ │ ├── AuthContext.jsx
  │ │ └── ...
  │ ├── guards/
  │ │ ├── AuthGuard.jsx
  │ │ ├── ProtectedRoute.jsx
  │ │ └── ...
  │ ├── hooks/
  │ │ ├── useCoinQuery.js
  │ │ └── ...
  │ ├── pages/
  │ │ ├── Homepage.jsx
  │ │ ├── SigninPage.jsx
  │ │ └── ...
  │ ├── routes/
  │ │ ├── Routes.jsx
  │ │ └── ...
  │ ├── services/
  │ │ ├── authService.js
  │ │ ├── firebase.js
  │ │ └── ...
  │ ├── utils/
  │ │ ├── AnimatedLogo.jsx
  │ │ ├── formatter.js
  │ │ └── ...
  │ ├── App.jsx
  │ ├── index.css
  │ ├── mian.jsx
  │ └── ...
  │
  ├── .env.local
  ├── .eslintrc.cjs
  ├── .gitignore
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── postcss.json
  ├── README.md
  ├── tailwind.config.js
  ├── vite.config.js
  └── ...
  ```

### Sure, let's go through each directory and file and describe their purpose:

- **project-root:** The root directory of the project.

- **font/:** Contains font files used in the project.

- **node_modules/:** Node.js modules folder containing dependencies.

- **public/:** Public assets folder for static files.

- **src/:** Source code folder containing the main project files.

  - **api/:** API-related files.

  - **assets/:** Additional assets used in the project.

  - **components/:** Reusable React components.

    - **Error/:** Error-related components.

    - **Home/:** Components for the home page.

    - **Layout/:** Layout components for the entire app.

    - **Signin/:** Components related to the sign-in functionality.

  - **context/:** Context-related files.

  - **guards/:** Guard components for route protection.

  - **hooks/:** Custom hooks used in the project.

  - **pages/:** React components representing different pages of the application.

  - **routes/:** React components defining the application's routes.

  - **services/:** Service files for different functionalities.

  - **utils/:** Utility files providing helper functions.

  - **App.jsx:** The main React component that serves as the entry point for the application.

  - **index.css:** The main CSS file for global styling.

  - **main.jsx:** The main JavaScript file for rendering the React application.

- **.env.local:** Local environment configuration file.

- **.eslintrc.cjs:** ESLint configuration file.

- **.gitignore:** Git configuration file specifying files and directories to be ignored.

- **index.html:** HTML file serving as the entry point for the application.

- **package-lock.json:** Auto-generated file used for version control of Node.js dependencies.

- **package.json:** Node.js package configuration file specifying project details and dependencies.

- **postcss.json:** Configuration file for PostCSS, a tool for transforming styles with JS plugins.

- **README.md:** Markdown file containing documentation and information about this project.

- **tailwind.config.js:** Configuration file for Tailwind CSS, a utility-first CSS framework.

- **vite.config.js:** Configuration file for Vite, a fast build tool for modern web applications.

## Contact

For any inquiries or feedback, reach out to me via [email](mailto:babsman4all@email.com).
