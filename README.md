
# Backend README without project structure section
backend_readme_simple = """
# 🛠️ StayEase Backend – Hostel Management & Billing System API

This is the backend service for **StayEase**, a full-featured Hostel Management and Billing System built using the **MERN Stack**. This backend handles RESTful API endpoints for authentication, room allocation, maintenance, billing, user management, and notifications.

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **NodeMailer** (Gmail SMTP for notifications)
- **PayPal SDK** (Sandbox integration)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory. Use `.env.example` as reference.

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=StayEase <your_email@gmail.com>
