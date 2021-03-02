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

  // Inhalte von playersData ändern
};

const view = {
  displayNewPlayerView() {
    this.generateNewPlayerElements();
    utils.setupFormSubmitHandler();
  },

  generateNewPlayerElements() {
    const app = document.querySelector(".app");
    const customForm = document.createElement("form");
    customForm.className = "form-add-player";
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
    const app = document.querySelector(".app");
    app.innerHTML = "";
  },

  generatePlayersList() {
    const playersList = document.createElement("ul");
    playersList.className = "players-list";

    const app = document.querySelector(".app");
    app.appendChild(playersList);

    for (const player of model.playersData) {
      const playerItem = document.createElement("li");
      playerItem.textContent = player.name;

      const playersList = document.querySelector(".players-list");
      playersList.appendChild(playerItem);
    }
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
  },
};

const utils = {
  setupFormSubmitHandler() {
    const addPlayerForm = document.querySelector(".form-add-player");
    addPlayerForm.addEventListener("submit", controller.createNewPlayer);
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
};

view.displayNewPlayerView();
