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
- [ ] rz 300, durchspielen, ez 250 => summe egal => + 1.000
- [ ] rz 300, durchspielen, ez 240 => summe egal => - 1.000
- [x] create chart skeleton
- [ ] add correct data
- [ ] x achse label
- [ ] y achse label
- [ ] wert der balken
- [ ] balken mittig starten
- [ ] balken farbe ändern
- [ ] Show current standings after round
- [ ] As a User, I can see the button "New Round"
- [ ] As a User, I can click the button "New Round"

## NICE TO HAVE

- [x] As a User, I can submit a new player by clicking Enter
- [ ] As a User, I can see a status message (success/error)
- [ ] As a User, I can see a status message (success/error)
- [ ] As a User, I can see a message to start "Reizen"
- [ ] As a User, I can't see a message to start "Reizen"
- [ ] As a User, I can see a message to start "Zeigen + Ablegen"
- [ ] As a User, I can't see a message to start "Zeigen + Ablegen"
- [ ] As a User, I can see a message to start "Melden + Ansagen"
- [ ] As a User, I can't see a message to start "Melden"
- [ ] As a User, I can see which user did (not) achieved its goal
- [ ] As a User, I can see a row for the "Total"-Numbers
- [ ] As a User, I can see a graph for the "Total"-Numbers
- [ ] As a User, I can edit a player name
- [ ] As a User, I can delete a player
- [ ] As a User, I can see who's the dealer
- [ ] As a User, the input field to add a new player is autofocused
