const app = findElement(".app");
createForm();
createDiv("players");
const playerInputField = findElement(".input-player-name");
const playersContainer = findElement(".players");
const addUserForm = findElement(".form-add-player");
let amountOfPlayers = 0;
let playersData = [];

function findElement(selector) {
  return document.querySelector(selector);
}

function createElement(tag) {
  return document.createElement(tag);
}

function isInvalid(values) {
  return values.some((value) => !value || isNaN(value));
}

function getInputValues(inputs) {
  return [...inputs].map((inputFeld) => inputFeld.value);
}

function createList(playerNames, titleText, className) {
  const title = createElement("h1");
  title.textContent = titleText;
  app.appendChild(title);

  const customList = createElement("div");

  for (let i = 0; i < playerNames.length; i++) {
    const listItem = createElement("p");
    listItem.textContent = playerNames[i] + ": ";
    const playerInput = createElement("input");
    playerInput.type = "text";

    playerInput.className = `${className}zahl ${className}-${playersData[i]["id"]}`;

    customList.appendChild(listItem);
    listItem.appendChild(playerInput);
  }

  return customList;
}

function createForm() {
  const customForm = createElement("form");
  customForm.className = "form-add-player";
  app.appendChild(customForm);

  const myForm = findElement(".form-add-player");
  const myInputField = createInputField("New Player Name", "input-player-name");
  myForm.appendChild(myInputField);

  const myButton = createButton("Add Player", "add-player");
  myForm.appendChild(myButton);
}

function createButton(buttonText, buttonId) {
  const customButton = createElement("button");
  customButton.textContent = buttonText;
  customButton.id = buttonId;
  return customButton;
}

function createInputField(inputPlaceholder, inputClassname) {
  const playerInput = createElement("input");
  playerInput.type = "text";
  playerInput.className = inputClassname;
  playerInput.placeholder = inputPlaceholder;
  playerInput.autofocus = true;
  return playerInput;
}

function createDiv(newClass) {
  const customDiv = createElement("div");
  customDiv.className = newClass;
  app.appendChild(customDiv);
}

function createDropdown(players) {
  const playerNameDropdown = createElement("select");
  playerNameDropdown.className = "playerSelected";

  players.forEach((player) => {
    const playerNameOption = createElement("option");
    playerNameOption.textContent = player["name"];
    playerNameOption.value = player["id"];
    playerNameDropdown.appendChild(playerNameOption);
  });

  return playerNameDropdown;
}

function clearPage() {
  app.innerHTML = "";
}

addUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (playerInputField.value.length > 2) {
    const player = createElement("p");
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

        const myStartGameButton = findElement("#start-game");

        myStartGameButton.addEventListener("click", () => {
          // REIZEN BEGINNT
          clearPage();

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

          const inputReizzahl = findElement(".input-reizen");

          let selectedPlayerInDropdownId = playersData[0]["id"];

          const dropdown = findElement(".playerSelected");
          dropdown.addEventListener("change", (event) => {
            selectedPlayerInDropdownId = event.target.value;
          });

          const submitReizzahl = findElement("#submit-reizzahl");
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
              clearPage();

              const playerNames = playersData.map((player) => player.name);
              const myPlayerNamesList = createList(
                playerNames,
                "Melden",
                "melden"
              );
              app.appendChild(myPlayerNamesList);

              const submitMeldenButton = createButton(
                "Punkte melden",
                "punkte-melden"
              );
              app.appendChild(submitMeldenButton);

              submitMeldenButton.addEventListener("click", () => {
                const playerIds = playersData.map((player) => player.id);

                const allMeldezahlInputs = document.querySelectorAll(
                  ".meldenzahl"
                );

                const allMeldezahlValues = getInputValues(allMeldezahlInputs);

                if (isInvalid(allMeldezahlValues)) {
                  alert("Bitte in jedes Feld eine Zahl eintragen");
                } else {
                  for (let i = 0; i < amountOfPlayers; i++) {
                    const currentPlayerInput = findElement(
                      `.melden-${playerIds[i]}`
                    );

                    const index = playersData.findIndex(
                      (player) => player.id === playerIds[i]
                    );

                    const currentRound =
                      playersData[index]["rounds"].length - 1;

                    playersData[index]["rounds"][
                      playersData[index]["rounds"].length - 1
                    ]["meldenzahl"] = Number(currentPlayerInput.value);
                  }

                  // ERZIELTE PUNKTE EINGEBEN BEGINNT
                  clearPage();

                  const myPlayerNamesListErzieltePunkte = createList(
                    playerNames,
                    "Erzielte Punkte",
                    "erzieltepunkte"
                  );
                  app.appendChild(myPlayerNamesListErzieltePunkte);

                  const submitErzieltePunkteButton = createButton(
                    "Erzielte Punkte melden",
                    "erzielte-punkte-melden"
                  );
                  app.appendChild(submitErzieltePunkteButton);

                  submitErzieltePunkteButton.addEventListener("click", () => {
                    const allErzieltePunkteInputs = document.querySelectorAll(
                      ".erzieltepunktezahl"
                    );

                    const allErzieltePunkteValues = getInputValues(
                      allErzieltePunkteInputs
                    );

                    if (isInvalid(allErzieltePunkteValues)) {
                      alert("Bitte in jedes Feld eine Zahl eintragen");
                    } else {
                      for (let i = 0; i < amountOfPlayers; i++) {
                        const currentPlayerInput = findElement(
                          `.erzieltepunkte-${playerIds[i]}`
                        );

                        const index = playersData.findIndex(
                          (player) => player.id === playerIds[i]
                        );

                        const currentRound =
                          playersData[index]["rounds"].length - 1;

                        playersData[index]["rounds"][currentRound][
                          "erzieltepunktezahl"
                        ] = Number(currentPlayerInput.value);
                      }
                    }
                  });
                }
              });
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
