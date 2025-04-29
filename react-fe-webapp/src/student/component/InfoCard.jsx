import React from 'react';

const InfoCard = ({ title, count, label }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.content}>
        <span style={styles.number}>{count}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    minWidth: '200px',
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  content: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '10px',
    marginTop: '1rem',
  },
  number: {
    fontSize: '2.5rem',
    color: '#f1c40f',
    fontWeight: 'bold',
  }
};

export default InfoCard;
