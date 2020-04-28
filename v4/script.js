const app = document.querySelector(".app")

function createForm() {
  const customForm = document.createElement("form")
  customForm.className = "form-add-player"
  app.appendChild(customForm)

  const myForm = document.querySelector(".form-add-player")
  const myInputField = createInputField("New Player Name", "input-player-name")
  myForm.appendChild(myInputField)

  const myButton = createButton("Add Player", "add-player")
  myForm.appendChild(myButton)
}

function createButton(buttonText, buttonId) {
  const customButton = document.createElement("button")
  customButton.textContent = buttonText
  customButton.id = buttonId
  return customButton
}

function createInputField(inputPlaceholder, inputClassname) {
  const playerInput = document.createElement("input")
  playerInput.type = "text"
  playerInput.className = inputClassname
  playerInput.placeholder = inputPlaceholder
  playerInput.autofocus = true
  return playerInput
}

function createDiv(newClass) {
  const customDiv = document.createElement("div")
  customDiv.className = newClass
  app.appendChild(customDiv)
}

createForm()

createDiv("players")

let amountOfPlayers = 0
const playerInputField = document.querySelector(".input-player-name")
const playersContainer = document.querySelector(".players")

let playerNames = []

const addUserForm = document.querySelector(".form-add-player")

addUserForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const player = document.createElement("p")
  player.textContent = playerInputField.value
  const newPlayer = {
    id: amountOfPlayers + 1,
    name: playerInputField.value,
  }
  playerNames.push(newPlayer)

  if (playerInputField.value.length > 2) {
    if (amountOfPlayers < 4) {
      playersContainer.appendChild(player)
      playerInputField.value = ""
      amountOfPlayers = amountOfPlayers + 1

      if (amountOfPlayers === 3) {
        const startGameButton = createButton("Start Game", "start-game")
        app.appendChild(startGameButton)

        const myStartGameButton = document.querySelector("#start-game")

        myStartGameButton.addEventListener("click", () => {
          app.innerHTML = ""

          const myInput = createInputField("Reizenzahl eingeben", "input-reizen")
          app.appendChild(myInput)

          const addReiznummerButton = createButton("Bestätigen", "submit-reizzahl")
          app.appendChild(addReiznummerButton)
          createDiv("reizzahl")

          const inputReizzahl = document.querySelector(".input-reizen")
          let currentHighestReizzahl = 0

          const submitReizzahl = document.querySelector("#submit-reizzahl")

          submitReizzahl.addEventListener("click", () => {
            const newReizzahl = inputReizzahl.value

            if (newReizzahl > currentHighestReizzahl) {
              currentHighestReizzahl = Number(newReizzahl)
              const reizzahlDiv = document.querySelector(".reizzahl")
              reizzahlDiv.textContent = newReizzahl
            } else {
              alert(`Bitte mindestens ${currentHighestReizzahl + 10} eingeben!`)
            }

            inputReizzahl.value = ""
          })

          // passen button anzeigen
          // wenn passen gedrückt wird, erhöhe passen-counter um 1
          // wenn der passen-counter 1 kleiner ist als die anzahl der spieler,
          // dann beende Reizen

        })
      }
    } else {
      alert("Maximal 4 Spieler erlaubt!")
    }
  } else {
    alert("Bitte längeren Name eingeben")
  }
})
