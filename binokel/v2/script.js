const model = {
  playersData: [],
  reizzahlWinnerId: 1,

  createNewPlayer(newPlayerName) {
    const newPlayer = {
      id: model.playersData.length + 1,
      name: newPlayerName,
      rounds: [],
    };
    model.playersData.push(newPlayer);
  },

  deletePlayer(playerId) {
    for (const player of model.playersData) {
      if(playerId == player.id) {
        const index = model.playersData.findIndex(player => playerId == player.id)
        model.playersData.splice(index,1)
      }
    }
  },

  updateReizzahlWinnerId(winnerId) {
    model.reizzahlWinnerId = Number(winnerId);
  },

  saveReizzahl(reizzahl) {
    const newPlayers = [];

    for (const player of model.playersData) {
      if (player.id === model.reizzahlWinnerId) {
        player.rounds.push({
          reizzahl,
        });
      } else {
        player.rounds.push({
          reizzahl: 0,
        });
      }

      newPlayers.push(player);
    }

    model.playersData = newPlayers;
  },

  savePunkte(inputData, key) {
    model.playersData.reduce((prev, curr) => {
      const currentPlayerInput = inputData.filter(
        (input) => Number(input.id) === curr.id
      );

      const currentRoundIndex = curr.rounds.length - 1;
      curr.rounds[currentRoundIndex][key] = Number(currentPlayerInput[0].value);

      return [...prev, curr];
    }, []);
  },
};

const view = {
  clearApp() {
    const app = utils.findApp();
    app.innerHTML = "";
  },

  displayNewPlayerView() {
    view.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
  },

  displayPlayersList() {
    view.clearApp();
    view.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
    view.generatePlayersList();
    utils.setupDeletePlayerHandler();
  },

  displayStartGameButton() {
    view.generateStartGameButton();
  },

  displayReizzahlElements() {
    view.generateReizzahlElements();
    utils.setupDropdownChangeHandler();
    utils.setupSubmitReizzahlHandler();
  },

  displayMeldezahlElements() {
    view.generateInputElements("Meldezahl", "meldezahl", "meldezahl");
    utils.setupSubmitMeldezahlHandler();
  },

  displayErzieltePunkteElements() {
    view.generateInputElements(
      "Erzielte Punkte",
      "erzieltepunkte",
      "erzieltepunkte"
    );
    utils.setupSubmitErzieltePunkteHandler();
  },

  displayCurrentStanding() {
    view.generateTable();

    const newRoundButton = utils.createButton(
      "Neue Runde starten",
      "new-round"
    );

    const app = utils.findApp();
    app.appendChild(newRoundButton);

    utils.setupSubmitStartNewRoundHandler();
  },

  generateNewPlayerElements() {
    const customForm = document.createElement("form");
    customForm.className = "form-add-player";

    const app = utils.findApp();
    app.appendChild(customForm);

    const myForm = document.querySelector(".form-add-player");

    const myInputField = utils.createInputField(
      "New Player Name",
      "input-player-name",
      INPUT_TYPE.TEXT
    );
    myForm.appendChild(myInputField);

    const myButton = utils.createButton("Add Player", "add-player");
    myForm.appendChild(myButton);
  },

  generatePlayersList() {
    const playersList = document.createElement("ul");
    playersList.className = "players-list";

    const app = utils.findApp();
    app.appendChild(playersList);

    for (const player of model.playersData) {
      const playerItem = document.createElement("li");
      playerItem.textContent = player.name;
      // TODO: warum steht hier "1"?????????
      playerItem.className = "players-list-item 1";
      playerItem.id = player.id;

      const deletePlayerButton = document.createElement("button");
      deletePlayerButton.textContent = "X";
      deletePlayerButton.className = "delete-player";
      playerItem.appendChild(deletePlayerButton);

      const playersList = document.querySelector(".players-list");
      playersList.appendChild(playerItem);
    }
  },

  generateStartGameButton() {
    const startGameButton = utils.createButton("Start Game", "start-game");

    const app = utils.findApp();
    app.appendChild(startGameButton);
  },

  generateReizzahlElements() {
    const reizzahlInput = utils.createInputField(
      "Reizzahl eingeben",
      "input-reizzahl",
      INPUT_TYPE.NUMBER
    );

    const app = utils.findApp();
    app.appendChild(reizzahlInput);

    const playersDropdown = utils.createDropdown();
    app.appendChild(playersDropdown);

    const submitReizzahlButton = utils.createButton(
      "Reizzahl bestätigen",
      "reizzahl-submit"
    );
    app.appendChild(submitReizzahlButton);
  },

  generateInputElements(headingText, inputClass, buttonId) {
    const app = utils.findApp();

    const heading = document.createElement("h1");
    heading.textContent = headingText;
    app.appendChild(heading);

    for (const player of model.playersData) {
      const label = document.createElement("label");
      label.textContent = player.name;
      app.appendChild(label);

      const input = utils.createInputField(
        "Punktzahl eingeben",
        `input-${inputClass}`,
        INPUT_TYPE.NUMBER
      );
      input.id = player.id;

      label.appendChild(input);
    }

    const submitButton = utils.createButton("Submit", `${buttonId}-submit`);
    app.appendChild(submitButton);
  },

  generateTable() {
    const app = utils.findApp();
    const table = utils.createTable();
    app.appendChild(table);
  },
};

const controller = {
  createNewPlayer() {
    event.preventDefault();
    const playerName = document.querySelector(".input-player-name");

    if (playerName.value === "") {
      alert("Bitte Name eingeben");
    } else {
      model.createNewPlayer(playerName.value);
      view.displayPlayersList();
      utils.checkIfDisplayStartGameButton();
    }
  },

  deletePlayer(playerId) {
    model.deletePlayer(playerId);
    view.displayPlayersList();
  },

  startGame() {
    view.clearApp();
    view.displayReizzahlElements();
  },

  saveReizzahl() {
    const inputs = utils.findInputs("input-reizzahl");

    if (inputs[0].value === "") {
      alert("Bitte Zahl eingeben");
    } else {
      model.saveReizzahl(Number(inputs[0].value));
      view.clearApp();
      view.displayMeldezahlElements();
    }
  },

  saveMeldezahl() {
    const inputs = utils.findInputs("input-meldezahl");
    const result = utils.convertHtmlInputsToInputData(inputs);

    if (result.isAllNumber) {
      model.savePunkte(result.data, "meldezahl");
      view.clearApp();
      view.displayErzieltePunkteElements();
    } else {
      alert("Mindestens ein Input war keine Zahl!");
    }
  },

  saveErzieltepunkte() {
    const inputs = utils.findInputs("input-erzieltepunkte");
    const result = utils.convertHtmlInputsToInputData(inputs);

    if (result.isAllNumber) {
      model.savePunkte(result.data, "erzieltePunkte");
      view.clearApp();
      view.displayCurrentStanding();
    } else {
      alert("Mindestens ein Input war keine Zahl!");
    }
  },
};

const utils = {
  setupFormSubmitHandler() {
    const addPlayerForm = document.querySelector(".form-add-player");
    addPlayerForm.addEventListener("submit", controller.createNewPlayer);
  },

  setupDeletePlayerHandler() {
    const deletePlayerButtons = document.querySelectorAll(".delete-player");

    for (const button of deletePlayerButtons) {
      button.addEventListener(
        "click",
        () => controller.deletePlayer(button.parentNode.id)
      );
    }
  },

  setupStartGameHandler() {
    const startGameButton = document.querySelector("#start-game");
    startGameButton.addEventListener("click", controller.startGame);
  },

  setupSubmitReizzahlHandler() {
    const reizzahlButton = document.querySelector("#reizzahl-submit");
    reizzahlButton.addEventListener("click", controller.saveReizzahl);
  },

  setupSubmitMeldezahlHandler() {
    const meldezahlButton = document.querySelector("#meldezahl-submit");
    meldezahlButton.addEventListener("click", controller.saveMeldezahl);
  },

  setupSubmitErzieltePunkteHandler() {
    const erzieltepunkteButton = document.querySelector(
      "#erzieltepunkte-submit"
    );
    erzieltepunkteButton.addEventListener(
      "click",
      controller.saveErzieltepunkte
    );
  },

  setupSubmitStartNewRoundHandler() {
    const newRoundButton = document.querySelector("#new-round");
    newRoundButton.addEventListener("click", controller.startGame);
  },

  setupDropdownChangeHandler() {
    const dropdown = document.querySelector(".reizzahl-players-dropdown");
    dropdown.addEventListener("change", () => {
      model.updateReizzahlWinnerId(event.target.value);
    });
  },

  randomName() {
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
  },

  randomNumber() {
    const MIN = 100;
    const MAX = 500;
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  },

  findApp() {
    return document.querySelector(".app");
  },

  findInputs(className) {
    return document.querySelectorAll(`.${className}`);
  },

  checkIfDisplayStartGameButton() {
    const amountOfPlayers = model.playersData.length;
    const MINIMUM_PLAYERS = 3;

    if (amountOfPlayers >= MINIMUM_PLAYERS) {
      view.displayStartGameButton();
      utils.setupStartGameHandler();
    }
  },

  createDropdown() {
    const playersDropdown = document.createElement("select");
    playersDropdown.className = "reizzahl-players-dropdown";

    for (let player of model.playersData) {
      const playerOption = document.createElement("option");
      playerOption.textContent = player.name;
      playerOption.value = player.id;
      playersDropdown.appendChild(playerOption);
    }

    return playersDropdown;
  },

  createInputField(inputPlaceholder, inputClassname, inputType = "text") {
    const playerInput = document.createElement("input");
    playerInput.type = inputType;
    playerInput.className = inputClassname;
    playerInput.placeholder = inputPlaceholder;
    playerInput.autofocus = true;
    // playerInput.value = dummyType === "name" ? utils.randomName() : utils.randomNumber();

    return playerInput;
  },

  createButton(buttonText, buttonId) {
    const customButton = document.createElement("button");
    customButton.textContent = buttonText;
    customButton.id = buttonId;
    return customButton;
  },

  createTable() {
    const thTexts = ["Runde"];

    for (const player of model.playersData) {
      thTexts.push(player.name);
    }

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const theadTr = utils.createTr("th", thTexts);

    thead.appendChild(theadTr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    const rounds = [];

    for (let i = 0; i < model.playersData[0]["rounds"].length; i++) {
      const round = ["R" + (i + 1)];

      for (const playerIndex in model.playersData) {
        const roundPoints =
          model.playersData[playerIndex]["rounds"][i]["erzieltePunkte"] +
          model.playersData[playerIndex]["rounds"][i]["meldezahl"];
        round.push(roundPoints);
      }

      rounds.push(round);
    }

    for (const round of rounds) {
      const tr = utils.createTr("td", round);
      tbody.appendChild(tr);
    }

    const sumAllRounds = ["Sum"];

    const maxRoundIndex = model.playersData[0]["rounds"].length;

    for (const playerIndex in model.playersData) {
      let sumCurrentPlayer = 0;

      for (let index = 0; index < maxRoundIndex; index++) {
        sumCurrentPlayer +=
          model.playersData[playerIndex]["rounds"][index]["erzieltePunkte"] +
          model.playersData[playerIndex]["rounds"][index]["meldezahl"];
      }

      sumAllRounds.push(sumCurrentPlayer);
    }

    const sumTr = utils.createTr("td", sumAllRounds);
    tbody.appendChild(sumTr);

    table.appendChild(tbody);

    return table;
  },

  createTr(elementInTr, trContent) {
    // elementInTr: entweder th oder td
    const tr = document.createElement("tr");

    for (text of trContent) {
      const customElement = document.createElement(elementInTr);
      customElement.textContent = text;
      tr.appendChild(customElement);
    }

    return tr;
  },

  // reizzahl: must exist
  // reizzahl: validate for number on submit
  // meldezahl: must exist
  // meldezahl: validate for number on submit
  // erzielte: must exist
  // erzielte: validate for number on submit
  validateNumberInputs(inputData) {
    let isAllInputDataANumber = true;

    console.log(inputData);

    for (const input of inputData) {
      if (isNaN(input.value)) {
        isAllInputDataANumber = false;
      }
    }

    return isAllInputDataANumber;
  },

  convertHtmlInputsToInputData(htmlInputs) {
    const inputData = {
      data: [],
      isAllNumber: true,
    };

    for (const htmlInput of htmlInputs) {
      const inputDataObject = {};

      inputDataObject["id"] = htmlInput.id;

      if (htmlInput.value === "") {
        inputData.isAllNumber = false;
      } else {
        inputDataObject["value"] = Number(htmlInput.value);
      }

      inputData.data.push(inputDataObject);
    }

    return inputData;
  },
};

const INPUT_TYPE = {
  NUMBER: "number",
  TEXT: "text",
};

view.displayNewPlayerView();
