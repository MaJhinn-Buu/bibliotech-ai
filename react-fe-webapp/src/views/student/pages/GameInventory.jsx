import React from 'react';
import styles from './StudentDashboard.module.css';
import { useNavigate } from 'react-router-dom';

const GameInventory = () => {
  const navigate = useNavigate();

  const games = [
    { name: 'NBA 2K23', status: 'Available' },
    { name: 'FIFA 22', status: 'In Use' },
    { name: 'Valorant', status: 'Available' },
    { name: 'Overwatch', status: 'Available' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/tiger-logo.svg" alt="Logo" height="40" />
          <span>Game Inventory</span>
        </div>
      </header>

      <button className={styles.backButton} onClick={() => navigate('/Student-Dashboard')}>
        ← Return to Dashboard
      </button>

      <div className={styles.grid}>
        {games.map((game, index) => (
          <div key={index} className={styles.card}>
            <h3>{game.name}</h3>
            <p>Status: <strong>{game.status}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameInventory;
