function addieren(a, b) {
  if((isNaN(a) || isNaN(b)) || (typeof a === 'string' || typeof b === 'string')) {
    return "Fehler: Bitte geben Sie 2 Zahlen ein";
  } else {
    return a+b;
  }
}
module.exports = addieren;