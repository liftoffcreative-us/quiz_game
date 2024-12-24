"use client"
import { createContext, useContext, useReducer } from 'react';


// initial state
const initialState = [];

// Reducer
function playersReducer(state, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, [action.payload.id]: action.payload.data};
        case 'UPDATE_USER':
            return {...state, [action.payload.id]: {...state[action.payload.id], ...action.payload.data } };
        case 'REMOVE_USER':
            const { [action.payload.id]: _, ...rest } = state;
            return rest;
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
export const usePlayersState = () => useContext(PlayersStateContext)
export const usePlayersDispatch = () => useContext(PlayersDispatchContext);