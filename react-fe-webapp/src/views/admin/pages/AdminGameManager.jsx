import React, { useState } from 'react';
import styles from './AdminGameManager.module.css';

const AdminGameManager = () => {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({ name: '', image: null });

  const handleInputChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewGame({ ...newGame, image: imageUrl });
    }
  };

  const handleAddGame = (e) => {
    e.preventDefault();
    if (!newGame.name || !newGame.image) return;
    setGames([...games, { ...newGame, id: Date.now() }]);
    setNewGame({ name: '', image: null });
  };

  const handleDelete = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Manage Game Inventory</h1>

      <form className={styles.form} onSubmit={handleAddGame}>
        <input
          type="text"
          name="name"
          placeholder="Game Name"
          value={newGame.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Add Game</button>
      </form>

      <div className={styles.grid}>
        {games.map((game) => (
          <div key={game.id} className={styles.card}>
            <img src={game.image} alt={game.name} className={styles.image} />
            <h3>{game.name}</h3>
            <button onClick={() => handleDelete(game.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGameManager;
