## CORE

### As a User, I can add a new player

- [x] As a User, I can see the button "New player"
- [x] As a User, I can click the button "New Player"
- [x] As a User, I can see an input "New Player Name"
- [x] As a User, I can input a player name
- [x] As a User, I can see the button "Save player"
- [x] As a User, I can click the button "Save Player"
- [x] As a User, I can see the result of adding a new player

### As a User, I can start a game

- [x] As a User, I can see the button "Start Game"
- [x] As a User, I can see the button "Start Game" only if there are at least 3 players
- [x] As a User, I can't see the button "Start Game"

### As a User, I can Reizen

- [x] As a User, I can see the input "Reiz"-Nummer
- [x] As a User, I can see the button "Reiz-Nummer" bestätigen
- [x] As a User, I can see the submitted input of "Reiz"-Nummer
- [x] As a User, my Reiz-Zahl gets saved round-based.

### As a User, I can Melden

- [x] As a User, I can see the input "Melden"-Nummer
- [x] As a User, I can see the button "Melden-Nummer" bestätigen
- [x] As a User, I can see the submitted input of "Melden"-Nummer

### As a User, I can Save my points

- [x] As a User, I can see the input "Erzielte Punkte"-Nummer
- [x] As a User, I can see the button "Erzielte Punkte" bestätigen
- [x] As a User, I can see the submitted input of "Erzielte Punkte"-Nummer

### As a User, I can see the current standings

- [x] nicht reizen gewonnen => hasEz ? (sumMzEZ) : 0
- [x] nicht reizen gewonnen + reizen gewonnen verloren => hasEz ? (sumMzEZ) + 40 : 0
- [x] reizen gewonnen => (sumMzEZ) >= rz ? (sumMzEZ) : -rz
- [x] rz 300, durchspielen, ez 250 => summe egal => + 1.000
- [x] rz 300, durchspielen, ez 240 => summe egal => - 1.000
- [x] Show current standings after round
- [x] As a User, I can see the button "New Round"
- [x] As a User, I can click the button "New Round"

## NICE TO HAVE

- [ ] player name: Remove random names
- [ ] reizzahl: remove random number
- [ ] meldezahl: remove random number
- [ ] erzielte: remove random number
- [ ] I can submit an input by clicking Enter
- [ ] the input field to add a new player is autofocused
- [ ] player name: edit a player name
- [ ] player name: delete a player
- [ ] player name: at least X characters
- [ ] player name: at least 3 player, max 4 players
- [ ] reizzahl: must exist
- [ ] meldezahl: style player rows
- [ ] meldezahl: must exist
- [ ] erzielte: style player rows
- [ ] erzielte: must exist
- [ ] summe: rot/grün, ob punktzahl erreicht
- [ ] summe: see who's the dealer
- [ ] summe: see a graph for the "Total"-Numbers
