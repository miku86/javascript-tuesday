const app = document.querySelector(".app");

function createList(playerNames) {
  const meldenTitle = document.createElement("h1");
  meldenTitle.textContent = "Melden";
  app.appendChild(meldenTitle);

  const customList = document.createElement("div");

  for (let i = 0; i < playerNames.length; i++) {
    const listItem = document.createElement("p")
    listItem.textContent = playerNames[i] + ': ';
    const meldenPlayerInput = document.createElement("input");
    meldenPlayerInput.type = "text";
    meldenPlayerInput.className = playerNames[i];
    customList.appendChild(listItem);
    listItem.appendChild(meldenPlayerInput);
  }

  return customList;
}

function createForm() {
  const customForm = document.createElement("form");
  customForm.className = "form-add-player";
  app.appendChild(customForm);

  const myForm = document.querySelector(".form-add-player");
  const myInputField = createInputField("New Player Name", "input-player-name");
  myForm.appendChild(myInputField);

  const myButton = createButton("Add Player", "add-player");
  myForm.appendChild(myButton);
}

function createButton(buttonText, buttonId) {
  const customButton = document.createElement("button");
  customButton.textContent = buttonText;
  customButton.id = buttonId;
  return customButton;
}

function createInputField(inputPlaceholder, inputClassname) {
  const playerInput = document.createElement("input");
  playerInput.type = "text";
  playerInput.className = inputClassname;
  playerInput.placeholder = inputPlaceholder;
  playerInput.autofocus = true;
  return playerInput;
}

function createDiv(newClass) {
  const customDiv = document.createElement("div");
  customDiv.className = newClass;
  app.appendChild(customDiv);
}

function createDropdown(players) {
  const playerNameDropdown = document.createElement("select");
  playerNameDropdown.className = "playerSelected";

  players.forEach((player) => {
    const playerNameOption = document.createElement("option");
    playerNameOption.textContent = player["name"];
    playerNameOption.value = player["id"];
    playerNameDropdown.appendChild(playerNameOption);
  });

  return playerNameDropdown;
}

createForm();

createDiv("players");

let amountOfPlayers = 0;
const playerInputField = document.querySelector(".input-player-name");
const playersContainer = document.querySelector(".players");

let playersData = [];

const addUserForm = document.querySelector(".form-add-player");

addUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (playerInputField.value.length > 2) {
    const player = document.createElement("p");
    player.textContent = playerInputField.value;
    const newPlayer = {
      id: amountOfPlayers + 1,
      name: playerInputField.value,
      rounds: [],
    };
    playersData.push(newPlayer);

    if (amountOfPlayers < 4) {
      playersContainer.appendChild(player);
      playerInputField.value = "";
      amountOfPlayers = amountOfPlayers + 1;

      if (amountOfPlayers === 3) {
        const startGameButton = createButton("Start Game", "start-game");
        app.appendChild(startGameButton);

        const myStartGameButton = document.querySelector("#start-game");

        myStartGameButton.addEventListener("click", () => {
          // REIZEN BEGINNT
          app.innerHTML = "";

          const myInput = createInputField(
            "Reizenzahl eingeben",
            "input-reizen"
          );
          app.appendChild(myInput);

          const playerNameDropdown = createDropdown(playersData);
          app.appendChild(playerNameDropdown);

          const addReiznummerButton = createButton(
            "Bestätigen",
            "submit-reizzahl"
          );
          app.appendChild(addReiznummerButton);

          const inputReizzahl = document.querySelector(".input-reizen");

          let selectedPlayerInDropdownId = playersData[0]["id"];

          const dropdown = document.querySelector(".playerSelected");
          dropdown.addEventListener("change", (event) => {
            selectedPlayerInDropdownId = event.target.value;
          });

          const submitReizzahl = document.querySelector("#submit-reizzahl");
          submitReizzahl.addEventListener("click", () => {
            if (!inputReizzahl.value || isNaN(inputReizzahl.value)) {
              alert("Bitte korrekte Reizzahl eingeben");
            } else {
              let selectedPlayerName;

              for (i = 0; i < amountOfPlayers; i++) {
                if (playersData[i]["id"] == selectedPlayerInDropdownId) {
                  selectedPlayerName = playersData[i]["name"];
                }
              }

              alert(
                `Möchtest du Folgendes bestätigen: ${selectedPlayerName} hat mit ${inputReizzahl.value} Punkte gewonnen`
              );

              for (let i = 0; i < playersData.length; i++) {
                if (selectedPlayerName === playersData[i]["name"]) {
                  playersData[i]["rounds"].push({
                    reizzahl: Number(inputReizzahl.value),
                  });
                } else {
                  playersData[i]["rounds"].push({
                    reizzahl: 0,
                  });
                }
              }

            // MELDEN BEGINNT

            app.innerHTML = "";            
            
            const playerNames = playersData.map((player) => player.name);
            const myPlayerNamesList = createList(playerNames);
            app.appendChild(myPlayerNamesList);

            const submitMeldenButton = createButton("Punkte melden", "punkte-melden");
            app.appendChild(submitMeldenButton);

            }
          });
        });
      }
    } else {
      alert("Maximal 4 Spieler erlaubt!");
    }
  } else {
    alert("Bitte längeren Name eingeben");
  }
});