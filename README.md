
## Building a basic version of a payment website
# Toupe Payment App

This project is a payment website built using the MERN stack (MongoDB, Express, React, Node.js). The website allows users to sign up, sign in, check their bank balance, and send money to other users. Upon signing up, users are assigned a random amount of money.

## Features

- **Sign Up & Sign In**: Create a new account or log in to an existing one.
- **Random Initial Balance**: Each new user is assigned a random amount of money upon signing up.
- **Check Balance**: View your current bank balance.
- **Send Money**: Transfer money to other users on the platform.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sahaniindrajit/Toupe-payment-app-.git
    cd Toupe-payment-app-
    ```

2. Install dependencies for both the frontend and backend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development servers:
    ```bash
    cd backend
    npm start
    cd ../frontend
    npm start
    ```

5. For backend Open your browser and navigate to `http://localhost:3500`.
6. For frontend run:
    ```bash
    cd ./frontend
    npm run dev
    ```

## Folder Structure

- `backend`: Contains the Express server and MongoDB models.
- `frontend`: Contains the React application.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

