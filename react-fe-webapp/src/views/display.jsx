import { useEffect, useState } from "react";
import axios from "axios";

export default function display() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then(res => {
                setGames(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Error fetching data: " + err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Game Availability List</h1>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        {game.Game_Name} - {game.Game_Availability}
                    </li>
                ))}
            </ul>
        </div>
    );
}