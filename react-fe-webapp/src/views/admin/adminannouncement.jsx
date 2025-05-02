import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adminannouncement.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AdminAnnouncement() {
  const navigate = useNavigate();

  return (
    <div className="page">
      {/* Left Sidebar Navigation */}
      <div className="sidebar">
        <div className="nav-top">
          <img
            src="https://via.placeholder.com/60"
            alt="Logo"
            className="logo"
          />
          <div className="nav-text">
            <div className="room-manager">Room Manager</div>
            <div className="brand-name">
              Biblio.<span style={{ color: 'white' }}>tech.ai</span>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <div
            className="sidebar-item"
            onClick={() => navigate('/admin-games-inventory')}
          >
            Board Game Inventory
          </div>
          <div className="sidebar-item">Room Occupancy Report</div>
          <div
            className="sidebar-item"
            onClick={() => navigate('/admin-announcement')}
          >
            Announcement
          </div>
        </div>

        <div className="info-icon">
          <i className="fas fa-info-circle"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        <h1 className="announcement-heading">Announcement</h1>
        <div className="big-card">
          {/* Text Box at the Top */}
          <input 
            type="text" 
            className="title-input" 
            placeholder="Title here" 
          />
          {/* Big Text Area for the Message */}
          <textarea 
            className="message-input" 
            placeholder="Message Here"
          />
          {/* Post Button */}
          <button className="post-button">Post</button>
        </div>
      </div>
    </div>
  );
}

export default AdminAnnouncement;
