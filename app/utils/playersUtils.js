import { PLAYER_COLORS } from '../constants';

export const reorderPlayers = (players) => {
  return players.map((player, index) => ({
    ...player,
    position: index,
    color: PLAYER_COLORS[index].value,
  }));
};
