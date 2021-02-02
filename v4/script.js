function createDiagram(data) {
  const barMargin = 30;
  const barWidth = 40;
  const containerBar = 2 * barMargin + barWidth;
  const svgWidth = data.length * containerBar;
  const scalingFactor = 4;
  const svgHeight = 2000 / scalingFactor;

  const svgBackgroundcolor = "white";

  const container = d3
    .select(".chart")
    .style("width", svgWidth + "px")
    .style("height", svgHeight + "px");

  const playersData = [];

  for (let i = 0; i < data.length; i++) {
    const name = data[i]["name"];
    const points = data[i]["roundTotal"];

    playersData.push({ name, points });
  }

  d3.select(".chart")
    .append("svg")
    .selectAll(".chart")
    .data(playersData)
    .enter()
    .append("rect")
    .attr("x", function (_, i) {
      return i * containerBar + barMargin;
    })
    .attr("y", function (d) {
      return svgHeight - d.points / scalingFactor;
    })
    .attr("height", function (d) {
      return d.points / scalingFactor;
    })
    .attr("width", barWidth);

  d3.select("svg")
    .style("width", svgWidth + "px")
    .style("height", svgHeight + "px")
    .style("background-color", svgBackgroundcolor);

  d3.select("svg")
    .selectAll("svg")
    .data(playersData)
    .enter()
    .append("text")
    .attr("x", function (_, i) {
      return i * containerBar + barMargin + barWidth / 2;
    })
    .attr("y", function (d, i) {
      return svgHeight - d.points / scalingFactor - 20;
    })
    .style("fill", "orange")
    .style("text-anchor", "middle")
    .text(function (d) {
      return d.points;
    });

  d3.select("svg")
    .selectAll("svg")
    .data(playersData)
    .enter()
    .append("text")
    .attr("x", function (_, i) {
      return i * containerBar + barMargin + barWidth / 2;
    })
    .attr("y", function (d, i) {
      return svgHeight - d.points / scalingFactor / 2;
    })
    .style("fill", "orange")
    .style("text-anchor", "middle")
    .text(function (d) {
      return d.name;
    });
}

function randomName() {
  const names = [
    "Adolf",
    "Alfred",
    "Bertram",
    "Fridolin",
    "Fritz",
    "Hans",
    "Horst",
    "Max",
    "Peter",
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];
  return randomName;
}

function randomNumber() {
  const MIN = 100;
  const MAX = 500;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

const app = findElement(".app");
createForm();
createDiv("players");
const playerInputField = findElement(".input-player-name");
const playersContainer = findElement(".players");
const addUserForm = findElement(".form-add-player");
let amountOfPlayers = 0;
let playersData = [];

const reachedMaxPlayers = "Maximal 4 Spieler erlaubt!";
const insertReizzahl = "Bitte korrekte Reizzahl eingeben";
const noEmptyValues = "Bitte in jedes Feld eine Zahl eintragen";
const insertLongerName = "Bitte längeren Name eingeben";

function hasWonReizen(reizzahl) {
  return reizzahl > 0;
}

function hasEz(erzieltepunktezahl) {
  return erzieltepunktezahl > 0;
}

function sumMzEZ(meldenzahl, erzieltepunktezahl) {
  return meldenzahl + erzieltepunktezahl;
}

// const confirmInput = (name, value) => `Möchtest du Folgendes bestätigen: ${name} - ${value}`;
function confirmInput(name, value) {
  return `Möchtest du Folgendes bestätigen: ${name} - ${value}`;
}

function confirmInputs(entries) {
  let message = "";

  for (let i = 0; i < entries.length; i++) {
    message += `Möchtest du Folgendes bestätigen: ${entries[i]["name"]} - ${entries[i]["value"]}\n`;
  }

  return message;
}

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

    playerInput.value = randomNumber();

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
  const myInputField = createInputField(
    "New Player Name",
    "input-player-name",
    "name" // for dummy data
  );
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

function createInputField(inputPlaceholder, inputClassname, type) {
  const playerInput = createElement("input");
  playerInput.type = "text";
  playerInput.className = inputClassname;
  playerInput.placeholder = inputPlaceholder;
  playerInput.autofocus = true;
  playerInput.value = type === "name" ? randomName() : randomNumber();
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
      playerInputField.value = randomName();
      amountOfPlayers = amountOfPlayers + 1;

      if (amountOfPlayers === 3) {
        // TODO: start new round here
        const startGameButton = createButton("Start Game", "start-game");
        app.appendChild(startGameButton);

        const myStartGameButton = findElement("#start-game");

        myStartGameButton.addEventListener("click", () => {
          // REIZEN BEGINNT
          clearPage();

          const myInput = createInputField(
            "Reizenzahl eingeben",
            "input-reizen",
            "number" // for dummy data
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
              alert(insertReizzahl);
            } else {
              let selectedPlayerName;

              for (i = 0; i < amountOfPlayers; i++) {
                if (playersData[i]["id"] == selectedPlayerInDropdownId) {
                  selectedPlayerName = playersData[i]["name"];
                }
              }

              alert(confirmInput(selectedPlayerName, inputReizzahl.value));

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
                  alert(noEmptyValues);
                } else {
                  let entries = [];

                  for (let i = 0; i < playerNames.length; i++) {
                    entries.push({
                      name: playerNames[i],
                      value: allMeldezahlValues[i],
                    });
                  }

                  alert(confirmInputs(entries));

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
                      alert(noEmptyValues);
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

                        const round =
                          playersData[index]["rounds"][currentRound];

                        const {
                          reizzahl,
                          meldenzahl,
                          erzieltepunktezahl,
                        } = round;

                        if (!hasWonReizen(reizzahl)) {
                          if (hasEz(erzieltepunktezahl)) {
                            round["roundTotal"] = sumMzEZ(
                              meldenzahl,
                              erzieltepunktezahl
                            );
                          } else {
                            round["roundTotal"] = 0;
                          }
                        } else {
                          if (
                            sumMzEZ(meldenzahl, erzieltepunktezahl) >= reizzahl
                          ) {
                            round["roundTotal"] = sumMzEZ(
                              meldenzahl,
                              erzieltepunktezahl
                            );
                          } else {
                            round["roundTotal"] = -reizzahl;
                          }
                        }
                      }

                      // finde aktuelle roundTotal jedes Spielers => [100, 200, 400]
                      const indexOfCurrentRound =
                        playersData[0].rounds.length - 1;

                      let roundData = [];

                      for (let i = 0; i < playersData.length; i++) {
                        const name = playersData[i].name;
                        const roundTotal =
                          playersData[i].rounds[indexOfCurrentRound].roundTotal;

                        roundData.push({
                          name,
                          roundTotal,
                        });
                      }

                      clearPage();
                      createDiagram(roundData);
                    }
                  });
                }
              });
            }
          });
        });
      }
    } else {
      alert(reachedMaxPlayers);
    }
  } else {
    alert(insertLongerName);
  }
});
