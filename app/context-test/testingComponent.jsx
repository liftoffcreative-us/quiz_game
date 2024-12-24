"use client"
import { useState, useEffect } from "react";
import { usePlayersState, usePlayersDispatch } from "../context/playersContext"

const TestingComponent = () => {
    const dispatch = usePlayersDispatch();
    const players = usePlayersState();
    const [name, setName] = useState(''); 

    const addUser = () => {
        const userId = `user${Date.now()}`; // Unique ID
        dispatch({
        type: 'ADD_USER',
        payload: { id: userId, data: { name: name || 'New User', score: 0 } },
        });
    };

    const addScore = (userId) => { 
        dispatch({
            type: 'UPDATE_USER',
            payload: { id: userId, data: { score: players[userId].score + 1 } }
        });
    }

    return (
        <div>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
        />
        <button onClick={addUser}>Add User</button>

        {Object.entries(players).map(([playerId, playerInfo]) => (
            <div key={playerId}>
                <h1>{playerInfo.name}</h1>
                <p>{playerInfo.score}</p>
                <button onClick={() => addScore(playerId)}>Add Score</button>
            </div>
        ))}
        </div>
    )
};

export default TestingComponent;