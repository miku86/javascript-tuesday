const app = document.querySelector(".app")

// function to create single button
function createButton(buttonText, buttonId) {
  const customButton = document.createElement("button")

  customButton.textContent = buttonText
  customButton.id = buttonId

  app.appendChild(customButton)
}

// function to create single input field
function createInputField() {
  const playerInput = document.createElement("input")

  playerInput.type = "text"
  playerInput.className = "input-player-name"
  playerInput.placeholder = "New Player Name"
  playerInput.autofocus = true

  app.appendChild(playerInput)
}

function createPlayersDiv() {
  const playersDiv = document.createElement("div")

  playersDiv.className = "players"

  app.appendChild(playersDiv)
}

// run function
createInputField()

// run function
createButton("Add Player", "add-player")

// run function
createPlayersDiv()

let amountOfPlayers = 0;
const playerInputField = document.querySelector(".input-player-name")
const addUserButton = document.querySelector("#add-player")
const playersContainer = document.querySelector(".players")

let playerNames = []

addUserButton.addEventListener("click", () => {
  const player = document.createElement("p")
  player.textContent = playerInputField.value
  const newPlayer = {
    id: amountOfPlayers + 1 ,
    name: playerInputField.value,
  }
  playerNames.push(newPlayer)

  if(playerInputField.value.length > 2){
    if(amountOfPlayers < 4){
      playersContainer.appendChild(player)
      playerInputField.value = ""
      amountOfPlayers = amountOfPlayers + 1;

      if(amountOfPlayers === 3){
        createButton("Start Game", "start-game")
      }
    } else {
      alert("Maximal 4 Spieler erlaubt!")
    }
  } else {
    alert("Bitte längeren Name eingeben")
  }
})
