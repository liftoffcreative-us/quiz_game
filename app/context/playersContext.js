'use client';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { INIT_RINGS, PLAYER_COLORS } from '../constants';
import { reorderPlayers } from '../utils/playersUtils';

// Define initial state
const initialState = {
  players: [], // Array of player objects
  currentTurn: 0, // Position number of the current player
};

let generateId;

// Reducer
function playersReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      generateId = () =>
        `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      return {
        ...state,
        players: [
          ...state.players,
          {
            playerId: generateId(),
            name: action.payload.name,
            color: PLAYER_COLORS[state.players.length].value,
            avatar: `/avatars/${action.payload.avatarName}.jpg`,
            rings: INIT_RINGS,
            score: 0,
            position: state.players.length,
          },
        ],
      };
    case 'ADD_RING':
      const updatedPlayersWithRing = state.players.map((player) =>
        player.playerId === action.payload.id
          ? {
              ...player,
              rings: player.rings.map((ring) =>
                ring.id === action.payload.ringId
                  ? { ...ring, achieved: true }
                  : ring
              ),
            }
          : player
      );
      return { ...state, players: updatedPlayersWithRing };
    case 'REMOVE_PLAYER':
      const rest = state.players.filter(
        (player) => player.playerId !== action.payload.id
      );
      // return rest of players and reassign positions
      return { ...state, players: reorderPlayers(rest) };
    case 'NEXT_TURN':
      return {
        ...state,
        currentTurn: (state.currentTurn + 1) % state.players.length,
      };
    case 'LOAD_STATE':
      return action.payload;
    case 'RESET_STATE':
      return initialState;
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

  // load state from local storage on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const persistedState = localStorage.getItem('playersState');
      if (persistedState) {
        dispatch({ type: 'LOAD_STATE', payload: JSON.parse(persistedState) });
      }
    }
  }, []);

  useEffect(() => {
    // Persist state to localStorage
    localStorage.setItem('playersState', JSON.stringify(state));
  }, [state]);

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
