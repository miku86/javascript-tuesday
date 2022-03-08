function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

var app = new Vue({
    el: "#app",
    data: {
        PAGE: {
            PLAYERS: "PlayerInput",
            REIZEN: "ReizenInput",
            MELDEN: "MeldenInput",
            ERZIELT: "ErzieltePunkteInput",
            ERGEBNIS: "ErgebnisOutput",
        },
        currentPage: "PlayerInput",
        currentRound: 0,
        players: [],
        playerNameInput: "",
        reizzahlInput: 0,
        selectedPlayerId: 0,
        rounds: [],
    },
    methods: {
        addPlayer: function () {
            this.players.push({
                id: uuidv4(),
                name: this.playerNameInput,
                rounds: [{ meldezahl: "", reizzahl: 0, erzielt: "" }],
            });
        },
        goToMelden: function () {
            const newPlayers = [];
            for (player of this.players) {
                if (player.id === this.selectedPlayerId) {
                    player.rounds[this.currentRound]["reizzahl"] = Number(this.reizzahlInput);
                } else {
                    player.rounds[this.currentRound]["reizzahl"] = 0;
                }
                newPlayers.push(player);
            }
            this.currentPage = this.PAGE.MELDEN
        },
        goToReizen: function () {
            this.currentPage = this.PAGE.REIZEN;
        },
        goToErzielt: function () {
            this.currentPage = this.PAGE.ERZIELT;
        },
        goToErgebnis: function () {
            this.currentPage = this.PAGE.ERGEBNIS;
            const currentRounds = this.rounds
            const round = { roundId: this.currentRound + 1, sums: [] }
            for (const player of this.players) {
                const id = player.id
                const sum = Number(player.rounds[this.currentRound].meldezahl) + Number(player.rounds[this.currentRound].erzielt)
                const currentPlayerRound = {
                    "id": id,
                    "sum": sum
                }
                round.sums.push(currentPlayerRound)
            }
            currentRounds.push(round)
            this.rounds = currentRounds
        },
        goToNextRound: function () {
            this.currentPage = this.PAGE.REIZEN;
            this.currentRound += 1
            for (player of this.players) {
                player.rounds.push({ meldezahl: "", reizzahl: 0, erzielt: "" })
            }
        },
    },
});