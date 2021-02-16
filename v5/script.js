const model = {
  // it should have a place to store the players data
  playersData: [],

  // Inhalte zu playersData hinzufügen
  // new Player zu playersData hinzufügen
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
    // suche add player button

    // lies spielername aus input feld aus

    // speicher inhalte in model
    model.createNewPlayer();

    // zeige name an - view.???

    // leere input feld
  },
};

const utils = {
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
