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

  updateReizzahlWinnerId(winnerId) {
    model.reizzahlWinnerId = Number(winnerId);
  },

  saveReizzahl() {
    const newPlayers = [];

    for (const player of model.playersData) {
      if (player.id === model.reizzahlWinnerId) {
        player.rounds.push({
          reizzahl: 123, // save correct reizzahl
        });
      } else {
        player.rounds.push({
          reizahl: 0,
        });
      }

      newPlayers.push(player);
    }

    model.playersData = newPlayers;
  },

  saveMeldezahl(inputs) {
    // gehe durch jedes inputfeld
    for (const input of inputs) {
      const correctPlayer = Object.fromEntries(
        Object.entries(model.playersData).filter(
          ([key, value]) => value.id === Number(input.id)
        )
      );
      // finde wert von input.value
      // speichere wert beim spieler mit der gleichen id
    }
  },
};

const view = {
  displayNewPlayerView() {
    view.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
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
      "name" // for dummy data
    );
    myForm.appendChild(myInputField);

    const myButton = utils.createButton("Add Player", "add-player");
    myForm.appendChild(myButton);
  },

  displayPlayersList() {
    view.clearApp();
    view.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
    view.generatePlayersList();
  },

  clearApp() {
    const app = utils.findApp();
    app.innerHTML = "";
  },

  generatePlayersList() {
    const playersList = document.createElement("ul");
    playersList.className = "players-list";

    const app = utils.findApp();
    app.appendChild(playersList);

    for (const player of model.playersData) {
      const playerItem = document.createElement("li");
      playerItem.textContent = player.name;

      const playersList = document.querySelector(".players-list");
      playersList.appendChild(playerItem);
    }
  },

  displayStartGameButton() {
    view.generateStartGameButton();
  },

  generateStartGameButton() {
    const startGameButton = utils.createButton("Start Game", "start-game");

    const app = utils.findApp();
    app.appendChild(startGameButton);
  },

  displayReizzahlElements() {
    view.generateReizzahlElements();
    utils.setupDropdownChangeHandler();
    utils.setupSubmitReizzahlHandler();
  },

  generateReizzahlElements() {
    const reizzahlInput = utils.createInputField(
      "Reizzahl eingeben",
      "input-reizzahl",
      "number"
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

  displayMeldezahlElements() {
    view.generateMeldezahlElements();
    utils.setupSubmitMeldezahlHandler();
  },

  generateMeldezahlElements() {
    const heading = document.createElement("h1");
    heading.textContent = "Melden";

    const app = utils.findApp();
    app.appendChild(heading);

    for (const player of model.playersData) {
      const label = document.createElement("label");
      label.textContent = player.name;
      app.appendChild(label);

      const input = utils.createInputField(
        "Meldezahl",
        "input-meldezahl",
        "number"
      );
      input.id = player.id;

      label.appendChild(input);
    }

    const submitButton = utils.createButton("Submit", "meldezahl-submit");

    app.appendChild(submitButton);
  },
};

const controller = {
  createNewPlayer() {
    event.preventDefault();
    const playerName = document.querySelector(".input-player-name");
    model.createNewPlayer(playerName.value);
    view.displayPlayersList();
    utils.checkIfDisplayStartGameButton();
  },

  startGame() {
    view.clearApp();
    view.displayReizzahlElements();
  },

  saveReizzahl() {
    model.saveReizzahl();
    view.clearApp();
    view.displayMeldezahlElements();
  },

  saveMeldezahl() {
    const inputs = utils.findMeldezahlInputs();
    model.saveMeldezahl(inputs);
  },
};

const utils = {
  setupFormSubmitHandler() {
    const addPlayerForm = document.querySelector(".form-add-player");
    addPlayerForm.addEventListener("submit", controller.createNewPlayer);
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

  findMeldezahlInputs() {
    return document.querySelectorAll(".input-meldezahl");
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

  createInputField(inputPlaceholder, inputClassname, dummyType) {
    const playerInput = document.createElement("input");
    playerInput.type = "text";
    playerInput.className = inputClassname;
    playerInput.placeholder = inputPlaceholder;
    playerInput.autofocus = true;
    playerInput.value =
      dummyType === "name" ? utils.randomName() : utils.randomNumber();
    return playerInput;
  },

  createButton(buttonText, buttonId) {
    const customButton = document.createElement("button");
    customButton.textContent = buttonText;
    customButton.id = buttonId;
    return customButton;
  },
};

view.displayNewPlayerView();