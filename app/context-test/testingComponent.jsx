"use client"
import { useState } from "react";
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
        setName(''); // reset input field after adding user
    };

    const addScore = (userId) => { 
        dispatch({
            type: 'UPDATE_USER',
            payload: { id: userId }
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
            style={{ color: 'black', marginRight: '20px' }}
        />
        <button style={{ background: 'white', color: 'black' }} onClick={addUser}>Add User</button>
        <p>Current Turn {currentTurn}</p>
        <button onClick={nextTurn} style={{ background: 'white', color: 'black', marginBottom: '20px' }}>Next Turn</button>

        {Object.entries(players).map(([_key, player]) => (
            <div key={player.playerId} 
            style={{ border: player.playerId === currentTurn ? '4px solid red' : '2px solid white', padding: '10px', marginBottom: '10px' }}>
                <h1 style={{ color: player.playerId === currentTurn ? 'red' : 'white' }}>
                    {player.name}
                </h1>
                <p>{player.score}</p>
                <button style={{ background: 'white', color: 'black' }} onClick={() => addScore(player.playerId)}>Add Score</button>
            </div>
        ))}
        </div>
    )
};

export default TestingComponent;