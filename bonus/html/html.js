function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

const new_list = document.createElement("ul");

const h1 = document.querySelector("h1");

h1.after(new_list);

const ul = document.querySelector("ul");
createListItem("Kekse");
createListItem("Bier");

// function createBoxAndAppend(text) {
//   // 1. div erstellen
//   const new_div = document.createElement("div");

//   // 2. inhalt zu div hinzufügen
//   new_div.textContent = text;

//   // 3. finden, wo man div anhängt
//   const h1 = document.querySelector("h1");

//   // 4. anhängen
//   h1.after(new_div);
// }

// createBoxAndAppend("Box 1");
// createBoxAndAppend("Box 2");
