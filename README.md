# Login-Signup-ForgetPass

# 🔐 MERN Authentication System

A full-stack user authentication system built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It provides complete authentication features including User Registration, Login, Forgot Password, and Reset Password using JWT (JSON Web Token) and secure password hashing (bcrypt).

# 🚀 Features

✅ User Registration with validation
✅ Secure Login using JWT
✅ Forgot Password with Email Reset Link
✅ Reset Password using Token Verification
✅ Protected Dashboard (accessible only after login)
✅ Modern and responsive UI using Material UI
✅ Error handling and alert messages
✅ Token-based authentication using localStorage

# 🏗️ Tech Stack

Frontend: React.js, Material UI, Axios, React Router
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Nodemailer
Database: MongoDB Atlas (or Local MongoDB)


# ⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/mern-auth.git
cd mern-auth
2️⃣ Setup Backend
cd backend
npm install
Create .env file in the backend/ folder
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
FRONTEND_URL=http://localhost:5173

Start Backend Server
npm run dev

3️⃣ Setup Frontend
cd frontend
npm install

Start Frontend
npm run dev

Now your app will run on:
👉 Frontend: http://localhost:5173

👉 Backend: http://localhost:5000 


# 🧩 API Endpoints
| Method | Endpoint                    | Description                     |
| -----: | --------------------------- | ------------------------------- |
|   POST | `/api/auth/register`        | Register a new user             |
|   POST | `/api/auth/login`           | Login user and return JWT token |
|   POST | `/api/auth/forgot-password` | Send password reset email       |
|   POST | `/api/auth/reset-password`  | Reset user password             |
|    GET | `/api/auth/user`            | Get user info (protected route) |


📧 Forgot & Reset Password Flow

User clicks Forgot Password and enters their email.

The server sends a reset password link to their registered email.

The email link contains a secure token and email query.

Clicking the link opens the Reset Password page.

User enters a new password, and the backend updates it securely.

# 🖥️ Screenshots
Signup
![alt text](<Screenshot 2025-09-30 at 2.52.54 PM.png>)

Login

![alt text](<Screenshot 2025-09-30 at 2.53.49 PM.png>)

Forget-Password

![alt text](<Screenshot 2025-09-30 at 2.54.34 PM.png>)

Reset-Password

![alt text](<Screenshot 2025-09-30 at 2.56.01 PM.png>)

Dashboard 

![alt text](<Screenshot 2025-09-30 at 2.57.27 PM-1.png>)

# 🔒 Security

Passwords are hashed using bcryptjs before saving.

Tokens are signed using JWT for secure access.

Routes are protected using middleware authentication.

Email reset links expire after a certain time.