import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav>
      <div className="logo">Bookstore</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {user ? (
          <>
            <li>Welcome, {user.username}</li>
            <li><Link to="/cart">Cart</Link></li>
            <li onClick={handleLogoutClick}>Logout</li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/admin/dashboard">Admin</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
