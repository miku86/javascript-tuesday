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
createButton("Start Game", "start-game")

// run function
createPlayersDiv()

const playerInputField = document.querySelector(".input-player-name")
const addUserButton = document.querySelector("#add-player")
const playersContainer = document.querySelector(".players")

addUserButton.addEventListener("click", () => {
  const player = document.createElement("p")
  player.textContent = playerInputField.value

  if(playerInputField.value.length > 2){
    playersContainer.appendChild(player)
    playerInputField.value = ""
  } else {
    alert("Bitte längeren Name eingeben")
  }
})
