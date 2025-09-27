# 🎉 Birthday Wishing Web App

A simple and interactive web application to **wish users on their birthdays**. Admins can manage users, add new birthdays, and view today's birthdays. Users can enter their name to check if it’s their birthday and receive a personalized greeting.There is a separate server for adding Admin manually and it is in AddAdmin.js.

---

## 🌟 Features

### User Features
- Enter your name to check if today is your birthday.
- Receive a personalized birthday greeting.
- Simple, clean, and responsive UI.

### Admin Features
- Admin login and authentication.
- Add new users with details:
  - Name
  - Gender
  - Phone Number
  - Email
  - Relation
  - Birthday Date
- View today’s birthdays in a dashboard.
- Secure session management.

### UI/UX
- Modern and responsive design using **Tailwind CSS**.
- Animated and colorful gradients for a cheerful experience.
- Error and success messages styled with Tailwind.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **Authentication:** Express-session, bcrypt
- **HTTP Client:** Axios

---

## ⚡ Installation & Setup

1. **Clone the repository**
   git clone <your-repo-url>
   cd birthday-webapp

2. Create a .env file and add the environment variables

3. cd Backend
   npm install
   nodemon server.js

4. cd frontend
   npm install
   npm run dev
