const app = document.querySelector(".app")

function createButton(buttonText, buttonId) {
  const customButton = document.createElement("button")
  customButton.textContent = buttonText
  customButton.id = buttonId
  app.appendChild(customButton)
}

function createInputField() {
  const playerInput = document.createElement("input")
  playerInput.type = "text"
  playerInput.className = "input-player-name"
  playerInput.placeholder = "New Player Name"
  playerInput.autofocus = true
  app.appendChild(playerInput)
}

createInputField()
createButton("Add Player", "add-player")