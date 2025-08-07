# DevCompanion

**DevCompanion** is a real-time chat application built with the MERN stack that allows users to chat in private or group conversations. It also features seamless AI integration using **Gemini API**, allowing users to interact with an AI assistant using `@ai` in their messages. Redis is used for efficient session management.

---

## 🚀 Features

- 💬 Real-time 1:1 and group chat using **WebSockets**
- 🤖 AI assistant powered by **Gemini API** — just type `@ai <your message>`
- 🔒 Secure user authentication using **JWT**
- ⚡ Efficient session tracking using **Redis**
- 📦 Built with the **MERN stack** (MongoDB, Express, React, Node)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, WebSocket, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Session Store**: Redis
- **Authentication**: JWT
- **AI Integration**: Gemini API

---


DevCompanion/
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── utils/
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── App.jsx
└── README.md

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/DevCompanion.git
cd DevCompanion

cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
GEMINI_API_KEY=your_gemini_api_key

cd ../frontend
npm install
npm start


## 📂 Project Structure

