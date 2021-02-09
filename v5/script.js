const model = {
  // it should have a place to store the players data
  playersData: [],

  // Inhalte zu playersData hinzufügen
  // new Player zu playersData hinzufügen
  createNewPlayer(newPlayerName) {
    const newPlayer = {
      id: this.playersData.length + 1,
      name: newPlayerName,
      rounds: [],
    };
    this.playersData.push(newPlayer);
  },

  // Inhalte von playersData entfernen

  // Inhalte von playersData ändern
};

const view = {
  // playersData anzeigen
};
