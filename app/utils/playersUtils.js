export const reorderPlayers = (players) => {
  return players.map((player, index) => ({
    ...player,
    position: index,
  }));
};
