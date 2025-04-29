import React, { useContext } from 'react';
import { DataContext } from '../data/dataContext';

const AdminPanel = () => {
  const { data, setData } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: parseInt(value) }));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Edit Room Availability</h2>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} style={{ margin: '1rem 0' }}>
          <label>{key}: </label>
          <input
            type="number"
            name={key}
            value={value}
            onChange={handleChange}
            style={{ width: '80px', padding: '0.4rem' }}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
