# Payment App

A simple payment application that allows users to **register, log in, and send money** to other users. Built using **Vite, React, Recoil** for state management, and **Node.js, Express** for the backend.

---

## 🚀 Features

✅ **User Authentication** (Register & Login)
✅ **Secure Token Storage** (JWT Authentication)
✅ **Send Money** to other registered users
✅ **User List** with interactive UI
✅ **State Management** with **Recoil**
✅ **Dark Mode Support**

---

## 🛠️ Tech Stack

### **Frontend**
- **Vite** (Fast React Development)
- **React** (UI Framework)
- **Recoil** (State Management)
- **TailwindCSS** (Styling)
- **Axios** (API Calls)
- **React Router** (Navigation)

### **Backend**
- **Node.js** (Runtime)
- **Express.js** (Server Framework)
- **MongoDB** (Database)
- **JWT Authentication**

---

## 📦 Installation

### 1️⃣ **Clone the Repository**
```sh
 git clone https://github.com/your-repo/payment-app.git
 cd payment
```

### 2️⃣ **Install Dependencies**
#### Install Frontend Dependencies:
```sh
 cd frontend
 npm install
```

#### Install Backend Dependencies:
```sh
 cd backend
 npm install
```

---

## 🏃 Running the Project

### **Start Backend**
```sh
 cd backend
 npm run dev  
```

### **Start Frontend**
```sh
 cd payment-app
 npm run dev  # Starts Vite server
```

The frontend will run on **`http://localhost:5173`** and the backend on **`http://localhost:3000`**.

---

## 🔑 API Endpoints

### **Authentication**
- `POST /api/v1/user/register` → Register a new user
- `POST /api/v1/user/login` → Login and receive a token

### **User & Transactions**
- `GET /api/v1/account/getbalance` → Get a list of users
- `POST /api/v1/account/send` → Send money to another user

---

## 🎨 UI Screens
- **Login & Register Pages** with form validation
- **Dashboard** showing user balance & users list
- **Send Money Modal** for transactions

---

## 📌 Folder Structure
```sh
/payment-app
 ├── /backend   # Frontend (Nodejs+Express+Recoil+Mongodb)
 ├── /frontend/payment-app   # Backend (React)
 ├── README.md # Project Documentation
```

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 🤝 Contributions
Contributions are welcome! Feel free to fork the repository and create a pull request.

---

## ✨ Author
👤 **Adarsh Kumar Singh**
📧 Email: adsdevvs@gmail.com
🔗 GitHub: [https://github.com/Adarsh1826]

## Login credentials
## username : user1
## password: 1234
