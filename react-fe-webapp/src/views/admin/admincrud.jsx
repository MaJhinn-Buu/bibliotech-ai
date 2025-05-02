import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admincrud.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AdminCRUD() {
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
        <div className="big-card">
          <table className="game-table">
            <thead>
              <tr>
                <th>Game ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Image URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Uno Cards</td>
                <td>Available</td>
                <td>uno.jpg</td>
              </tr>
              <tr>
                <td>002</td>
                <td>Monopoly</td>
                <td>Borrowed</td>
                <td>monopoly.jpg</td>
              </tr>
              <tr>
                <td>003</td>
                <td>Chess</td>
                <td>Available</td>
                <td>chess.jpg</td>
              </tr>
              <tr>
                <td>004</td>
                <td>Scrabble</td>
                <td>Available</td>
                <td>scrabble.jpg</td>
              </tr>
              <tr>
                <td>005</td>
                <td>Secret Hitler</td>
                <td>Borrowed</td>
                <td>secret_hitler.jpg</td>
              </tr>
              <tr>
                <td>006</td>
                <td>Spot It!</td>
                <td>Available</td>
                <td>spot_it.jpg</td>
              </tr>
            </tbody>
          </table>

          {/* Buttons at the bottom right */}
          <div className="buttons-container">
            <button className="action-button">Create New</button>
            <button className="action-button">Edit</button>
            <button className="action-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCRUD;

