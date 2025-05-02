import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admingamesinventory.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AdminGamesInventory() {
  const navigate = useNavigate();
  const games = ['Uno Cards', 'Monopoly', 'Scrabble', 'Chess', 'Secret Hitler', 'Spot It!'];

  // Initialize all switches as OFF (false)
  const [status, setStatus] = useState(Array(games.length).fill(false));

  const toggleStatus = (index) => {
    const updatedStatus = [...status];
    updatedStatus[index] = !updatedStatus[index];
    setStatus(updatedStatus);
  };

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
          <div
            className="sidebar-item"
          >
            Room Occupancy Report
          </div>
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
        <div className="cards-container">
          {games.map((game, index) => (
            <div className="card" key={index}>
              <div className="card-number">#{String(index + 1).padStart(3, '0')}</div>
              <div className="card-name">{game}</div>
              <div className="card-status-container">
                <div className="card-status">
                  {status[index] ? 'Borrowed' : 'Available'}
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={status[index]}
                    onChange={() => toggleStatus(index)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Show Record Button */}
        <button
          className="show-record-btn"
          onClick={() => navigate('/admin-crud')}
        >
          Show Record
        </button>
      </div>
    </div>
  );
}

export default AdminGamesInventory;
