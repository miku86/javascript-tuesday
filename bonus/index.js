/*
* Speichere deinen Name in einer Variable ab.
* Speichere dein Alter in einer Variable ab.
*/

const name = "Tobi"
const age = 29

/*
* Welche Datentypen haben wir hier benutzt?
*/

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

const personArray = [name, age]
// console.log("Array ==> ", personArray)
// console.log(personArray[0]) // name
// console.log(personArray[1])
// console.log("=================")

/*
* Speichere deinen gespeicherten Name und Alter zusammen in einem Objekt ab.
* Welche Datentruktur benutzen wir hier?
*/

const personObject = {name, age}
// console.log("Object ==> ", personObject)
// console.log(personObject.name)
// console.log(personObject["name"])
// console.log(personObject.age)

const todoList = [
  { id: 1, title: "bier kaufen"},
  { id: 2, title: ["bier trinken", "xyz"]}
]

// console.log(todoList)
// console.log(todoList[1])
// console.log(todoList[1]["title"][1])

/*
* Für welche Fälle könnte es sinnvoller sein, Daten in einem Array zu speichern?
* Für welche Fälle könnte es sinnvoller sein, Daten in einem Objekt zu speichern?
*/

// Array: sortierte Ansammlung von Daten
// Object: unsortierte Ansammlung, Reihenfolge egal

/*
* Wie könnten wir am sinnvollsten eine Liste von Spielern abspeichern,
* so dass wir sie später einfach benutzen können?
*/

// Spielername - 1 Wert pro Spieler
// höchste Reizzahl pro Runde insgesamt - 1 Wert pro Runde
// gemeldete Punkte pro Spieler - 1 Wert pro Spieler pro Runde
// erzielte Punkte durch Stiche - 1 Wert pro Spieler pro Runde
// mindestens 1 Stich gemacht ? - 1 Wert pro Spieler pro Runde

const spielDaten = {
  spieler: [
    {
      spielerId: 1,
      spielerName: "Hans",
      runden: [
        {
          gemeldetePunkte: 40,
          erzielteStiche: 100,
          hatStichGemacht: true
        },
        {
          gemeldetePunkte: 120,
          erzielteStiche: 80,
          hatStichGemacht: true
        }
      ]
    },
    {
      spielerId: 2,
      spielerName: "Max",
      runden: [
        {
          gemeldetePunkte: 40,
          erzielteStiche: 100,
          hatStichGemacht: true
        },
        {
          gemeldetePunkte: 120,
          erzielteStiche: 80,
          hatStichGemacht: true
        }
      ]
    },
  ]
}

// wieviele erziele Stiche hat Max in der 2. Runde gemacht
console.log(spielDaten["spieler"][1]["runden"][1]["erzielteStiche"])