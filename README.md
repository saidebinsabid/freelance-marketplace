# kajKori 🚀

**Find Freelancers. Post Tasks. Get Things Done.**

---

## 🚀 Live Project Link
[![Live Demo](https://img.shields.io/badge/Live%20Demo-%20-%2300C853?style=for-the-badge&logo=appveyor)](https://kajkori-420.netlify.app/)

---

## 📖 Project Overview

**kajKori** is a modern freelance task marketplace platform designed to connect individuals seeking small tasks with skilled freelancers ready to offer their services. The platform enables users to post tasks, browse available tasks, place bids, and manage their posted jobs efficiently—all within a seamless, secure, and responsive web application.

Built with **React** on the client side and **Node.js + Express + MongoDB** on the server side, kajKori emphasizes user experience, security, and performance. Authentication is powered by Firebase with email/password and Google login support. The UI is sleek and responsive, optimized for desktop, tablet, and mobile devices.

---

## 🎯 Key Features

- **User Authentication:** Email/password login, registration, and Google sign-in with protected routes.
- **Task Management:** Users can add, browse, update, and delete tasks.
- **Bidding System:** Freelancers can bid on tasks, and users can view bids for their posted tasks.
- **Responsive Design:** Works flawlessly on mobile, tablet, and desktop screens.
- **Dark/Light Mode:** Toggle theme option on the homepage for a better user experience.
- **Real-Time Notifications:** Success and error messages are powered by toast alerts.
- **Secure Routing:** Private routes protect sensitive pages with proper redirection.
- **Loading Spinners:** Visual feedback during data fetch or submit actions.
- **Environment Variables:** Secure storage of Firebase and MongoDB credentials.

---

## 🏗️ Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── DifferentDataCount.jsx
│   │   ├── DifferentDataCountCard.jsx
│   │   ├── FeaturedTask.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestTaskCard.jsx
│   │   ├── NavBar.jsx
│   │   ├── PopularFreelancer.jsx
│   │   ├── TaskCard.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── UpdateTaskModal.jsx
│   ├── Firebase/
│   ├── Layouts/
│   │   ├── AuthLayout.jsx
│   │   └── HomeLayout.jsx
│   ├── Pages/
│   │   ├── AddTask.jsx
│   │   ├── BrowseTask.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
│   │   ├── Loading.jsx
│   │   ├── Login.jsx
│   │   ├── MyTask.jsx
│   │   ├── Register.jsx
│   │   └── TaskDetails.jsx
│   ├── Provider/
│   │   ├── AuthProvider.jsx
│   │   ├── PrivateRoutes.jsx
│   │   └── ThemeContext.jsx
│   ├── Routes/
│   │   └── Routes.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

```
---

## 🖥️ Server Side (/freelance-marketplace-server)

```
server/
├── .vercel/
├── node_modules/
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── vercel.json

```
---


---

## 📋 Usage

- Navigate through the navbar to access Home, Add Task, Browse Tasks, My Posted Tasks, Login, and Signup.
- Post new tasks with title, category, description, deadline, and budget.
- Browse and bid on available tasks.
- Manage your own posted tasks with update and delete options.
- View bids placed on your tasks.
- Switch between light and dark themes on the homepage.

---

## 🚀 Technologies Used

- **Frontend:** React, React Router, Tailwind CSS, Firebase Authentication, React-Toastify, React Simple Typewriter, SwiperJS  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Hosting:** Netlify (Client), Vercel (Server)  
- **Authentication:** Firebase (Email/Password, Google OAuth)  

---

## 📞 Contact

For any questions or feedback, please contact:

- Email: ssaidebin1@gmail.com 
---

Thank you for visiting KajKori!  
Your reliable platform to get freelance tasks done efficiently.