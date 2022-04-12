const { v4: uuidv4 } = require('uuid');

class Player {
  #id;
  #name;

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get idAndName() {
    return "ID: " + this.#id + " | " + "Name: " + this.#name;
  }

  constructor(name) {
    this.#id = uuidv4();
    this.#name = name;
  }
}

const playerMario = new Player("Mario")
const playerTobi = new Player("Tobi")
const playerMichael = new Player("Michael")

console.log(playerMario.idAndName);
console.log(playerTobi.idAndName);
console.log(playerMichael.idAndName);