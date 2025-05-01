import { Link } from 'react-router-dom';
import styles from './StudentDashboard.module.css';

const StudentDashboard = () => {
  // Replace these with actual data later (from API)
  const data = {
    mainRoom: 12,
    gameRoom: 4,
    games: 18,
    computers: 9,
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/tiger-logo.svg" alt="Logo" height="40" />
          <span>Biblio.tech.ai – Room Availability</span>
        </div>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Main Room</h2>
          <div className={styles.number}>{data.mainRoom}</div>
          <div className={styles.label}>Available Seats</div>
        </div>

        <div className={styles.card}>
          <h2>Game Room</h2>
          <div className={styles.number}>{data.gameRoom}</div>
          <div className={styles.label}>Available Seats</div>
        </div>

        {/* ✅ Game Inventory with Link */}
        <Link to="/game-inventory" className={styles.cardLink}>
          <div className={styles.card}>
            <h2>Game Inventory</h2>
            <div className={styles.number}>{data.games}</div>
            <div className={styles.label}>Available Games</div>
          </div>
        </Link>

        <div className={styles.card}>
          <h2>Computers</h2>
          <div className={styles.number}>{data.computers}</div>
          <div className={styles.label}>Available Computers</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
