import React, { useContext } from 'react';
import InfoCard from './InfoCard';
import { DataContext } from '../data/dataContext';

const Dashboard = () => {
  const { data } = useContext(DataContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Room Manager Dashboard</h1>
      <div style={styles.grid}>
        <InfoCard title="Main Room" count={data.mainRoom} label="Available Seats" />
        <InfoCard title="Game Room" count={data.gameRoom} label="Available Seats" />
        <InfoCard title="Game Inventory" count={data.gameInventory} label="Available Games" />
        <InfoCard title="Computers" count={data.computers} label="Available Computers" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f1c40f',
    minHeight: '100vh',
    padding: '2rem',
  },
  header: {
    fontSize: '1.8rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
};

export default Dashboard;
