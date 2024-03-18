import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginForm';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import NavBar from './components/Navbar';
import './App.css'

import SignupForm from './components/SignupForm';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import RegisterForm from './pages/RegisterForm';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    // Implement logout logic (e.g., clear user data and redirect to login page)
    setUser(null);
    // You may also want to clear cart items or perform other cleanup tasks here
  };

  return (
    <div className='App'>
    <Router>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<HomePage user={user} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<SignupForm />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/book/:id" element={<BookDetails />} />
        {user && <Route path="/cart" element={<Cart user={user} />} />}
        <Route path="/admin/dashboard" element ={<AdminDashboard/>}/>
        <Route path="/admin/register" element ={<RegisterForm/>}/>
        <Route path="/admin/login" element ={<AdminLogin/>}/>
         </Routes>
    </Router>
    </div>
  );
};

export default App;
