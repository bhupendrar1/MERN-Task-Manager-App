# 📝 MERN Task Manager App

A full-stack **Task Manager Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**. This application allows users to create, update, delete, search, and mark tasks as completed.

---

## 🚀 Tech Stack

### 🔹 Frontend

* React
* Bootstrap
* React Icons
* React Toastify

# Deploy 

<img width="1920" height="1080" alt="Screenshot (297)" src="https://github.com/user-attachments/assets/21ae4863-3d0e-4369-905f-d7f8a1dbac76" />


Main Component: `TaskManager.js` .
API Calls: `api.js` .
Utilities & API URL: `utils.js` .

### 🔹 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

Server Entry: `index.js`.
Routes: `TaskRouter.js` .
Database Config: `db.js` .
Model: `TaskModel.js` .
Controller: `TaskController.js`.

---

## ✨ Features

* ➕ Create new tasks
* 📋 Fetch all tasks
* ✏️ Update task name
* ✅ Mark task as completed
* 🗑️ Delete tasks
* 🔍 Search tasks
* 🔔 Toast notifications for actions
* 🌍 Deployed backend (Vercel compatible)

---

## ⚙️ Installation & Setup

### 🔹 1️⃣ Clone the Repository

```bash
git clone -- https://github.com/bhupendrar1/MERN-Task-Manager-App.git
cd mern-task-manager
```

---

### 🔹 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```
PORT=8080
DB_URL=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

Server runs on:

```
http://localhost:8080
```

---

### 🔹 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
to start both backened & frontend project - npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /tasks     | Get all tasks   |
| POST   | /tasks     | Create new task |
| PUT    | /tasks/:id | Update task     |
| DELETE | /tasks/:id | Delete task     |

---

## 🌐 Deployment

### Backend

* Can be deployed on **Vercel .**

### Frontend

* Can be deployed on **Netlify / Vercel**

Make sure to update `API_URL` in `utils.js` with deployed backend URL.

---

## 🔮 Future Improvements

* 🔐 User authentication (JWT)
* 📊 Task categories & priority
* 📅 Due date feature
* 🌙 Dark mode
* 📱 Mobile optimized UI

---

## 👨‍💻 Author

**Bhupendra Singh**
MERN Stack Developer

---

⭐ If you like this project, consider giving it a star on GitHub!


