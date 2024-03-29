﻿# book_store

# Book Store Project 
 This is a full-stack book store application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse books, add them to the cart, and make purchases. The application also includes authentication and authorization features for admin and regular users.

Features User-friendly interface for browsing and managing books. Search and filter books by author, category, etc. Add books to cart and checkout functionality. Authentication and authorization for admin and users. Admin can manage books (add, update, delete) and view checkout details. Technologies Used Frontend: React.js, React Router, Axios Backend: Node.js, Express.js, Prisma ORM, MongoDB Authentication: JWT (JSON Web Tokens) Additional Libraries: Clerk (for user authentication UI), Bootstrap (for styling) Setup Backend (API) Clone the repository:

git clone https://github.com/your-username/book-store.git Navigate to the backend directory:

cd backend Install dependencies:

npm install Create a .env file in the backend directory and add the following environment variables:

PORT=3001 MONGODB_URI=your_mongodb_uri JWT_SECRET=your_jwt_secret Run the backend server:http://localhost:3001

npm start Frontend Navigate to the frontend directory:

cd frontend Install dependencies:

npm install Create a .env file in the frontend directory and add the following environment variables:

REACT_APP_API_URL=http://localhost:5173 Run the frontend application:

npm start Open your browser and go to http://localhost:5173 to view the application.

Usage As an admin, you can log in to access the admin dashboard, manage books, and view checkout details. As a user, you can browse books, add them to the cart, and make purchases.
