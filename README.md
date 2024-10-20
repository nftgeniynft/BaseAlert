# BaseAlert

BaseAlert is a simple decentralized app (dApp) that tracks blockchain transactions on the Base network and sends notifications to users via email when certain conditions are met (e.g., transactions to a specific address).

## Features
- Monitor any wallet or smart contract address.
- Get real-time email alerts when a transaction occurs.
- Simple and easy-to-use web interface.

## Project Structure
- **Backend:** Node.js server to handle blockchain tracking and email notifications.
- **Frontend:** React-based interface for users to input addresses and configure notifications.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/BaseAlert.git
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Set up environment variables by creating a `.env` file in the `backend` folder:
    ```
    BASE_RPC_URL=https://base.blockchain.node.url
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    PORT=5000
    ```

5. Start the backend and frontend servers:
    ```bash
    cd backend && npm start
    cd ../frontend && npm start
    ```

6. Access the frontend at `http://localhost:3000`.

## Technologies Used
- **Backend:** Node.js, Express, Web3.js, Nodemailer
- **Frontend:** React, Axios
- **Database:** SQLite (for storing user alert preferences)

## Future Improvements
- Support for additional notification platforms (e.g., Telegram).
- Expanded criteria for alerts (e.g., filtering by transaction amount).
