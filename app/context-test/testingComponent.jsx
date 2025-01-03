'use client';
import { useState } from 'react';
import { usePlayersState, usePlayersDispatch } from '../context/playersContext';

const TestingComponent = () => {
  const dispatch = usePlayersDispatch();
  const { players, currentTurn } = usePlayersState();
  const [name, setName] = useState('');
  const [selectedStar, setSelectedStar] = useState(1);

  const addUser = () => {
    dispatch({
      type: 'ADD_USER',
      payload: { name: name },
    });
    setName(''); // reset input field after adding user
  };

  const removePlayer = (playerId) => {
    dispatch({
      type: 'REMOVE_PLAYER',
      payload: { id: playerId },
    });
  };

  const addStar = (playerId, starId) => {
    dispatch({
      type: 'ADD_STAR',
      payload: { id: playerId, starId: starId },
    });
    setSelectedStar(1); // reset selected star after adding star
  };

  const nextTurn = () => {
    dispatch({
      type: 'NEXT_TURN',
    });
  };

  const resetPlayersState = () => {
    dispatch({
      type: 'RESET_STATE',
    });
  };

  const currentPlayerAddStar = (starId) => {
    dispatch({
      type: 'CURRENT_PLAYER_ADD_STAR',
      payload: { starId: starId },
    });
  };

  const starSelector = () => {
    return (
      <select
        vaule={selectedStar}
        onChange={(e) => setSelectedStar(parseInt(e.target.value))}
        style={{ marginRight: '10px', color: 'black' }}
      >
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <option key={id} value={id} style={{ color: 'black' }}>
            {id}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        style={{ color: 'black', marginRight: '20px' }}
      />
      <button style={{ background: 'white', color: 'black' }} onClick={addUser}>
        Add User
      </button>
      <p>Current Turn {currentTurn}</p>
      <button
        onClick={nextTurn}
        style={{
          background: 'white',
          color: 'black',
          marginBottom: '20px',
          marginRight: '20px',
        }}
      >
        Next Turn
      </button>
      <br />
      {starSelector()}
      <button
        onClick={() => currentPlayerAddStar(selectedStar)}
        style={{
          background: 'white',
          color: 'black',
          marginBottom: '20px',
          marginLeft: '20px',
        }}
      >
        Add Star to Current Player
      </button>
      {Object.entries(players).map(([_key, player]) => (
        <div
          key={player.id}
          style={{
            border:
              player.position === currentTurn
                ? '4px solid red'
                : '2px solid white',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h1
            style={{ color: player.position === currentTurn ? 'red' : 'white' }}
          >
            {player.name} ({player.id})
          </h1>
          <p>Position #{player.position}</p>
          <p>Avatar {player.avatar}</p>
          <p>
            Stars:
            {player.stars.map((star) => (
              <span
                key={star.id}
                style={{ color: star.achieved ? 'green' : 'red' }}
              >
                {star.id}
              </span>
            ))}
          </p>
          {starSelector()}
          <button
            style={{
              background: 'white',
              color: 'black',
            }}
            onClick={() => addStar(player.id, selectedStar)}
          >
            Add Star
          </button>
          <button
            style={{ background: 'white', color: 'black', marginLeft: '30px' }}
            onClick={() => removePlayer(player.id)}
          >
            Remove Player
          </button>
        </div>
      ))}
      <button
        style={{ background: 'white', color: 'black', marginLeft: '30px' }}
        onClick={resetPlayersState}
      >
        Reset State
      </button>{' '}
    </div>
  );
};

export default TestingComponent;
