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

<div style="display: flex; justify-content: center; align-items: baseline; gap: 20px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="100" height="100">
  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS" width="100" height="100">
  <img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" alt="React Query" width="100" height="100">
  <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt="Gsap" width="100" height="100">
</div>

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
  │ ├── Moranga-Regular.otf
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
  │ │ ├── authGuard.jsx
  │ │ ├── ProtectedRoute.jsx
  │ │ └── ...
  │ ├── hooks/
  │ │ ├── use-loader.jss
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
  │ │ ├── convertNum.js
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

## Contact

For any inquiries or feedback, reach out to me via [email](mailto:babsman4all@email.com).
