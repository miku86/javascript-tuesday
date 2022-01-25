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
        rounds: {},
    },
    methods: {
        addPlayer: function () {
            this.players.push({
                id: (this.playerId += 1),
                name: this.playerNameInput,
                rounds: [{ meldezahl: "" }],
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
            //R1: ID1 10, ID2 20, ID 30
            const rounds = {
                //   R1: [
                //     {ID:1, Sum:0},
                //     {ID:1, Sum:0}
                // ]
            }
            rounds.R1 = []
            for (const player of this.players) {
                const id = player.id
                const sumR1P1 = player.rounds[0].meldezahl + player.rounds[0].erzielt
                const currentPlayerRound = {
                    "ID": id,
                    "Sum": sumR1P1
                }
                rounds.R1.push(currentPlayerRound)
            }

            // TODO: currentRound erhöhen
        },
    },
});