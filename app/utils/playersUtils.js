import { PLAYER_COLORS } from '../constants';

export const reorderPlayers = (players) => {
  return players.map((player, index) => ({
    ...player,
    position: index,
    color: PLAYER_COLORS[index].value,
  }));
};

// returns new players[] with seletect player star added
export const addStarToPlayerInPlayers = ({
  playerId = null,
  starId,
  state,
}) => {
  return state.players.map((player, index) => {
    if (playerId ? player.id === playerId : index === state.currentTurn) {
      return {
        ...player,
        stars: player.stars.map((star) =>
          star.id === starId ? { ...star, achieved: true } : star
        ),
      };
    } else {
      return player;
    }
  });
};
