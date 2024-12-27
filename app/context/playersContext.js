'use client';
import { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  players: [], // Array of player objects
  currentTurn: 0, // Index of the current player's turn
};

// Reducer
function playersReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        players: [
          ...state.players,
          {
            playerId: state.players.length,
            name: action.payload.name,
            score: 0,
          },
        ],
      };
    case 'UPDATE_USER':
      const updatedPlayers = state.players.map((player) =>
        player.playerId === action.payload.id
          ? { ...player, score: player.score + 1 }
          : player
      );
      return { ...state, players: updatedPlayers };
    case 'REMOVE_USER':
      const { [action.payload.id]: _, ...rest } = state;
      return rest;
    case 'NEXT_TURN':
      return {
        ...state,
        currentTurn: (state.currentTurn + 1) % state.players.length,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Contexts
const PlayersStateContext = createContext();
const PlayersDispatchContext = createContext();

// Provider
export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playersReducer, initialState);

  return (
    <PlayersStateContext.Provider value={state}>
      <PlayersDispatchContext.Provider value={dispatch}>
        {children}
      </PlayersDispatchContext.Provider>
    </PlayersStateContext.Provider>
  );
};

// Hooks
export const usePlayersState = () => useContext(PlayersStateContext);
export const usePlayersDispatch = () => useContext(PlayersDispatchContext);
