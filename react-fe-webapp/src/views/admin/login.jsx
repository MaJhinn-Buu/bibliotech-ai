import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login validation logic here if needed
    navigate('/admin-games-inventory'); // ✅ This matches your router
  };

  return (
    <div className="page">
      {/* Top Navigation Bar */}
      <div className="navbar">
        <div className="nav-left">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="logo"
          />
          <div>
            <div className="room-manager">Room Manager</div>
            <div className="brand-name">
              Biblio.<span style={{ color: 'white' }}>tech.ai</span>
            </div>
          </div>
        </div>
        <div className="info-icon">
          <i className="fas fa-info-circle"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Tiger Image */}
        <img
          src="https://via.placeholder.com/400x400"
          alt="Tiger"
          className="tiger-image"
        />

        {/* Login Box */}
        <div className="login-box">
          <h2 className="login-title">LOGIN</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <div className="forgot-password">Forgot Password</div>
            <button type="submit" className="login-button">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
