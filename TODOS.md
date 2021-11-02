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

- [x] player name: Remove random names
- [x] reizzahl: remove random number
- [x] meldezahl: remove random number
- [x] erzielte: remove random number
- [x] reizzahl: set to correct input type
- [x] meldezahl:set to correct input type
- [x] erzielte: set to correct input type
- [x] reizzahl: must exist
- [x] reizzahl: validate for number on submit
- [x] meldezahl: must exist
- [x] meldezahl: validate for number on submit
- [x] the input field to add a new player is autofocused
- [x] reizzahl: all players are below each other
- [x] erzieltepunkte: all players are below each other
- [x] erzielte: must exist
- [x] erzielte: validate for number on submit
- [x] kontrollieren, dass player name input einen gültigen wert hat
- [x] player name: delete a player
- [ ] add random id when creating a player
- [ ] I can submit reizzahl by clicking Enter
- [ ] I can submit meldezahl by clicking Enter
- [ ] I can submit erzieltepunkte by clicking Enter
- [ ] player name: edit a player name
- [ ] player name: at least 3 player, max 4 players
- [ ] meldezahl: style player rows
- [ ] erzielte: style player rows
- [ ] summe: rot/grün, ob punktzahl erreicht
- [ ] summe: see who's the dealer
- [ ] summe: see a graph for the "Total"-Numbers
