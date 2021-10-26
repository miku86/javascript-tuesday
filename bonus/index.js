/*
 * Speichere deinen Name in einer Variable ab.
 * Speichere dein Alter in einer Variable ab.
 */

const username = "Tobi"; // string
const age = 31; // number
const isBayernFan = true; // boolean

// DATENTYPEN (Atom)
// string: Serie von Zeichen
// number: mathematisches Grundelement
// boolean: true / false

// DATENSTRUKTUREN (Moleküle)
// array: [], Sammlung
// object: {}, Sammlung

/*
 * Speichere deinen gespeicherten Name und Alter zusammen in einem Array ab.
 * Welche Datenstruktur benutzen wir hier?
 */

const tobis_data1 = [username, age, isBayernFan];

/*
 * Speichere deinen gespeicherten Name und Alter zusammen in einem Objekt ab.
 * Welche Datentruktur benutzen wir hier?
 */

const tobis_data2 = {
  name: username,
  age,
  isBayernFan,
};

/*
 * Für welche Fälle könnte es sinnvoller sein, Daten in einem Array zu speichern?
 * Für welche Fälle könnte es sinnvoller sein, Daten in einem Objekt zu speichern?
 */

/*
 * Tobi macht sich mit einem Tante Emma Laden selbstständig.
 * Um zu wissen, welche Produkte er hat, möchte er den Produktname und deren Anzahl speichern.
 * Wie könnten solche gespeicherten Daten aussehen?
 */

// Produktname
// Anzahl
const products = [
  { uid: "1", name: "apple", count: "0" },
  { uid: "2", name: "bier", count: "0" },
  { uid: "3", name: "bier", count: "2" },
];

products[0]["name"];
products[1]["name"];
products[99]["name"];

/*
 * Tobi hat es geschafft: Sein Tante Emma Laden wächst und gedeiht.
 * Einmal pro Monat macht Tobi deshalb Inventur.
 * Tobi möchte jede Inventur in seinem Computer speichern.
 * Wie könnten solche gespeicherten Daten aussehen?
 */

// Inventurid
// Inventurdatum
// Verantwortlicher
// Produkte: Produktid, Produktname, Produktanzahl

const inventuren = [
  {
    inventurid: "1",
    inventurdatum: "2021-01-01",
    verantwortlicher: "Tobi",
    products: [
      {
        productid: "1",
        productname: "apples",
        productcount: 3,
      },
      {
        productid: "2",
        productname: "bier",
        productcount: 2,
      },
      {
        productid: "3",
        productname: "Haribo",
        productcount: 10,
      },
    ],
  },
  {
    inventurid: "2",
    inventurdatum: "2021-02-01",
    verantwortlicher: "Tobi",
    products: [
      {
        productid: "1",
        productname: "apples",
        productcount: 3,
      },
      {
        productid: "2",
        productname: "bier",
        productcount: 2,
      },
    ],
  },
];
