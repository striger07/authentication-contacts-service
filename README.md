# 🔐 Authentication Contacts Service (Node.js + Express + MongoDB)

A secure REST API that allows users to register, login and manage their personal contacts.
This project demonstrates real-world backend concepts like authentication, authorization and protected routes using JWT.

---

## 🚀 Features

* User Registration & Login
* Password hashing using **bcrypt**
* JWT Authentication
* Protected routes (middleware based authorization)
* CRUD operations for contacts
* Each request validated using access token
* Error handling middleware

---

## 🧠 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv

---

## 📁 Project Structure

```
controllers/
middleware/
models/
routes/
server.js
constants.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/striger07/authentication-contacts-service.git
cd authentication-contacts-service
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file in root folder

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_super_secret_key
```

### 4. Run the server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 Authentication Flow

1. Register user
2. Login → receive JWT token
3. Send token in headers to access protected routes

Header format:

```
Authorization: Bearer <your_token>
```

---

## 📮 API Endpoints

### Auth Routes

| Method | Endpoint              | Description                    |
| ------ | --------------------- | ------------------------------ |
| POST   | `/api/users/register` | Register new user              |
| POST   | `/api/users/login`    | Login user & get token         |
| GET    | `/api/users/current`  | Get logged-in user (Protected) |

---

### Contact Routes (Protected)

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/contacts`     | Get all contacts   |
| POST   | `/api/contacts`     | Create contact     |
| GET    | `/api/contacts/:id` | Get single contact |
| PUT    | `/api/contacts/:id` | Update contact     |
| DELETE | `/api/contacts/:id` | Delete contact     |

---

## 🛡 Security

* Password stored as hashed value
* Token based authentication
* Protected API routes
* Sensitive data excluded from responses

---

## 📌 Future Improvements

* Refresh token implementation
* User specific contacts isolation
* Role based authorization
* Rate limiting & security headers
* Deployment (Render / AWS)

---

## 👨‍💻 Author

**Lakshay Sharma**

Backend Developer (Node.js)

---

⭐ If you found this useful, consider giving the repo a star!
