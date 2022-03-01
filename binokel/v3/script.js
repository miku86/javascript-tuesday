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
        playerId: 0,
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
                id: (this.playerId += 1),
                name: this.playerNameInput,
                rounds: [{ meldezahl: "", reizzahl: 0, erzielt: "" }],
            });
        },
        goToMelden: function () {
            const newPlayers = [];
            for (player of this.players) {
                if (player.id === this.selectedPlayerId) {
                    player.rounds.push({ reizzahl: Number(this.reizzahlInput) });
                } else {
                    player.rounds.push({ reizzahl: 0 });
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
            const rounds = []
            const round = {roundId: this.currentRound+1, sums: []}
            for (const player of this.players) {
                const id = player.id
                const sum = Number(player.rounds[this.currentRound].meldezahl) + Number(player.rounds[this.currentRound].erzielt)
                const currentPlayerRound = {
                    "id": id,
                    "sum": sum
                }
                round.sums.push(currentPlayerRound)
                // roundId: 1, sums: [{ID: 1, Sum: 11},{ID: 2, Sum: 22},{ID: 3, Sum: 33}]
            }
            rounds.push(round)
            this.rounds = rounds

            this.currentRound += 1
        },
    },
});