"use client"
import { useState, useEffect } from "react";
import { usePlayersState, usePlayersDispatch } from "../context/playersContext"

const TestingComponent = () => {
    const dispatch = usePlayersDispatch();
    const {players, currentTurn} = usePlayersState();
    const [name, setName] = useState(''); 

    const addUser = () => {
        dispatch({
        type: 'ADD_USER',
        payload: { name: name },
        });
    };

    const addScore = (userId) => { 
        dispatch({
            type: 'UPDATE_USER',
            payload: { id: userId, data: { score: players[userId].score + 1 } }
        });
    }

    const nextTurn = () => {
        dispatch({
            type: 'NEXT_TURN',
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
        <p>Current Turn {currentTurn}</p>
        <button onClick={nextTurn}>Next Turn</button>

        {Object.entries(players).map(([_key, player]) => (
            <div key={player.playerId}>
                <h1 style={{ color: player.playerId === currentTurn ? 'red' : 'white' }}>
                    {player.name}
                </h1>
                <p>{player.score}</p>
                <button onClick={() => addScore(player.playerId)}>Add Score</button>
            </div>
        ))}
        </div>
    )
};

export default TestingComponent;