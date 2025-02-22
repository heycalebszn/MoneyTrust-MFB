Authentication API with OTP Verification

This project is a Node.js and Express.js backend with MongoDB, supporting:
	•	User registration & login
	•	JWT authentication
	•	OTP generation & verification via Nodemailer
	•	Secure password hashing with bcryptjs

📌 Tech Stack
	•	Node.js (Backend)
	•	Express.js (Framework)
	•	MongoDB (Database)
	•	Mongoose (ODM)
	•	Nodemailer (Email service)
	•	JWT (Authentication)
	•	bcryptjs (Password hashing)

🚀 Setup & Installation

1. Clone the Repository

git clone https://github.com/heycalebszn/MoneyTrust-MFB.git
cd authentication-api

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the root directory and add:

MONGO_URI=
JWT_SECRET=
GMAIL_USER=kalejaiyecaleb@gmail.com
GMAIL_PASSWORD=aezfimjdzzhhptdf

	Note: If using Gmail, enable “Less secure apps” or set up an App Password.

4. Run the Server

node server.js

	Server will run on http://localhost:5000 by default.

📌 API Endpoints

1️⃣ User Registration

Endpoint: POST /api/auth/register
Request Body:

{
  "email": "user@example.com",
  "password": "securepassword"
}

Response:

{
  "msg": "User registered successfully"
}

2️⃣ User Login

Endpoint: POST /api/auth/login
Request Body:

{
  "email": "user@example.com",
  "password": "securepassword"
}

Response:

{
  "token": "your_jwt_token"
}

3️⃣ Generate OTP

Endpoint: POST /api/auth/generate-otp
Request Body:

{
  "email": "user@example.com"
}

Response:

{
  "msg": "OTP sent successfully"
}

📧 User receives an email with a 6-digit OTP.

4️⃣ Verify OTP

Endpoint: POST /api/auth/verify-otp
Request Body:

{
  "email": "user@example.com",
  "otp": "123456"
}

Response:

{
  "msg": "OTP verified successfully"
}

📌 Error Handling

If a request fails, an error message is returned:

{
  "msg": "Error message here"
}

📌 Deployment

Deploy on Render / Vercel / Railway
	1.	Push the project to GitHub
	2.	Deploy to Render, Vercel, or Railway
	3.	Add environment variables

📌 Future Improvements
	•	✅ Password reset functionality
	•	✅ Role-based access control
	•	✅ Rate-limiting to prevent spam

📌 Conclusion

This API provides a secure authentication system with OTP verification. It’s structured with a scalable architecture and best practices.

🚀 Enjoy coding! 🚀
