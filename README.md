# AceBook Project

This repository is a FaceBook clone which aims to replicate its core functunalities.

## Built with MERN, Bootstrap, HTML, CSS, Jest and Vitest

## 🌟 Features

    * Authentication: Secure user authentication implemented using JWT for session management, with encrypted passwords stored in a MongoDB database.
    * State Management: Managed application state efficiently using React for seamless user interactions and  data handling.
    * Responsive Design: Designed a responsive and user-friendly interface with Bootstrap, HTML, and CSS.
    * API Integration: Developed APIs using Node.js and Express to handle user actions such as creating posts, commenting on posts, and liking posts.
    * Database Operations: Utilized MongoDB for data storage, enabling robust handling of user profiles and posts.
    * Dynamic Frontend: Built interactive frontend components with React, ensuring modularity and maintainability.
    * Media Uploads: Implemented functionality for uploading and displaying media files, such as photos and videos.

## 🔧 Prerequisites

Ensure you have Node.js and MongoDB installed.

### Set up your project

Install dependencies for both the `frontend` and `api` applications:

```
cd frontend
npm install
cd ../api
npm install
```

Install an ESLint plugin for your editor, for example
[ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Setting up environment variables.

You need to create two `.env` files, one in the frontend and one in the api.

#### Frontend

Create a file `frontend/.env` with the following contents:

```
VITE_BACKEND_URL="http://localhost:3000"
```

#### Backend

Create a file `api/.env` with the following contents:

```
MONGODB_URL="mongodb://0.0.0.0/acebook"
NODE_ENV="development"
JWT_SECRET="secret"
```

For an explanation of these environment variables, see the documentation.

### How to run the server and use the app

1. Start the server application (in the `api` directory) in dev mode:

```
; cd api
; npm run dev
```

2. Start the front end application (in the `frontend` directory)

In a new terminal session...

```
; cd frontend
; npm run dev
```

You should now be able to open your browser and go to
`http://localhost:5174/signup` to create a new user.
