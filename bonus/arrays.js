// // speichere 3 beliebige Zahlen in einer passenden Datenstruktur
// const numbers = [87, 152, 4];

// // speichere 3 beliebige Namen in einer passenden Datenstruktur
// const names = ["Hans", "Peter", "Franz"];

// // speichere 3 beliebige Nahmen in einer passenden Datenstruktur, jeder Name soll eine einzigartige ID haben
// const accounts = [
//   {
//     id: 161,
//     name: "Hans",
//     height: 196,
//   },
//   {
//     id: 182,
//     name: "Fritz",
//     height: 192,
//   },
//   {
//     id: 187,
//     name: "Max",
//     height: 176,
//   },
// ];

//////////////////////////////////////////////////////////////////////////////////
// fall 1: filtern: jedes array-elemente ausfiltern, das bedingung erfüllt
// beispiel: alle array-elemente filtern, die gerade sind

// alt: for-schleifen
// const result = [];

// normale for-schleife
// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     result.push(numbers[i]);
//   }
// }

// for-in-schleife
// for (const i in numbers) {
//   if (numbers[i] % 2 === 0) {
//     result.push(numbers[i]);
//   }
// }

// for-of-schleife
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     result.push(num);
//   }
// }

// // neu: filter
// gibt zwischen 0 und Länge des Arrays zurück
// const numbers = [11, 12, 13, 14];

// const result = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(result);

//////////////////////////////////////////////////////////////////////////////////
// fall 2: mappen: jedem array-element neuen wert anhand von algorithmus zuweisen
// beispiel: alle array-elemente mit 2 multiplizieren
// const numbers = [1, 2, 3, 4];

// const result = [];

// // alt: for-schleife
// for (const num of numbers) {
//   result.push(num * 2);
// }

// console.log(result);

// neu: map

// const numbers = [11, 12, 13, 14];

// const result = numbers.filter((num) => num % 2 === 0);
// const result = numbers.map((num) => {
//   return num * 2;
// });

// console.log(result);

//////////////////////////////////////////////////////////////////////////////////
// fall 3: reduce: aus mehreren array-element ein end-element erstellen
// beispiel: alle array-elemente addieren (= summe)
// const numbers = ["Fritz", "Hans"];

// // alt: for-schleife
// let result = 0;

// for (const num of numbers) {
//   result += num;
// }

// neu: reduce
// const result = numbers.reduce((previousValue, currentValue) => {
//   const currentPlayer = {
//     name: currentValue,
//   };
//   const copy = previousValue;
//   copy.push(currentPlayer);
//   return copy;
// }, []);

// console.log(result);
