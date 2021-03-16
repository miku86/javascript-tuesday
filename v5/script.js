const model = {
  // it should have a place to store the players data
  playersData: [],

  createNewPlayer(newPlayerName) {
    const newPlayer = {
      id: this.playersData.length + 1,
      name: newPlayerName,
      rounds: [],
    };
    this.playersData.push(newPlayer);
  },

  createReizzahlen() {},
};

const view = {
  displayNewPlayerView() {
    this.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
  },

  generateNewPlayerElements() {
    const customForm = document.createElement("form");
    customForm.className = "form-add-player";

    const app = utils.findApp();
    app.appendChild(customForm);

    const myForm = document.querySelector(".form-add-player");

    const myInputField = this.createInputField(
      "New Player Name",
      "input-player-name",
      "name" // for dummy data
    );
    myForm.appendChild(myInputField);

    const myButton = this.createButton("Add Player", "add-player");
    myForm.appendChild(myButton);
  },

  displayPlayersList() {
    this.clearApp();
    this.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
    this.generatePlayersList();
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
    this.generateStartGameButton();
  },

  generateStartGameButton() {
    const startGameButton = this.createButton("Start Game", "start-game");

    const app = utils.findApp();
    app.appendChild(startGameButton);
  },

  displayReizzahlElements() {
    this.generateReizzahlElements();
    utils.setupSubmitReizzahlHandler();
  },

  generateReizzahlElements() {
    const reizzahlInput = view.createInputField(
      "Reizzahl eingeben",
      "input-reizzahl",
      "number"
    );

    const app = utils.findApp();
    app.appendChild(reizzahlInput);

    const playersDropdown = this.createDropdown();
    app.appendChild(playersDropdown);

    const submitReizzahlButton = this.createButton(
      "Reizzahl bestätigen",
      "reizzahl-submit"
    );
    app.appendChild(submitReizzahlButton);
  },

  // TODO: in utils packen?
  createDropdown() {
    const playersDropdown = document.createElement("select");

    for (let player of model.playersData) {
      const playerOption = document.createElement("option");
      playerOption.textContent = player.name;
      playerOption.value = player.id;
      playersDropdown.appendChild(playerOption);
    }

    return playersDropdown;
  },

  createInputField(inputPlaceholder, inputClassname, type) {
    const playerInput = document.createElement("input");
    playerInput.type = "text";
    playerInput.className = inputClassname;
    playerInput.placeholder = inputPlaceholder;
    playerInput.autofocus = true;
    playerInput.value =
      type === "name" ? utils.randomName() : utils.randomNumber();
    return playerInput;
  },

  createButton(buttonText, buttonId) {
    const customButton = document.createElement("button");
    customButton.textContent = buttonText;
    customButton.id = buttonId;
    return customButton;
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
    model.createReizzahlen();
  },

  saveReizzahl() {
    console.log("lauft");
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

  checkIfDisplayStartGameButton() {
    const amountOfPlayers = model.playersData.length;
    const MINIMUM_PLAYERS = 3;

    if (amountOfPlayers >= MINIMUM_PLAYERS) {
      view.displayStartGameButton();
      this.setupStartGameHandler();
    }
  },
};

view.displayNewPlayerView();
