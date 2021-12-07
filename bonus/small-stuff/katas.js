// funktion, in die ich zahl sende und als antwort bekomme, ob zahl durch 2 und 5 teilbar
// x(8)       => false
// x(20)      => true
// x("hallo") => false
function isDivisibleBy2And5(numberToTest) {
  if (isNaN(numberToTest)) {
    return false;
  }

  if (!(numberToTest % 2) && !(numberToTest % 5)) {
    return true;
  } else {
    return false;
  }
}

isDivisibleBy2And5(8);

// funktion, in die ich text sende und wenn text länger als 5 buchstaben, dann anzahl an buchstaben, ansonsten "zu kurz"
// x("tobias") => 6
// x("mario")  => "zu kurz"
// x(234)      => "kein text"
function doCountCharactersOfText(text) {
  if (typeof text === "string") {
    if (text.length > 5) {
      return text.length;
    } else {
      return "text zu kurz";
    }
  } else {
    return "kein text";
  }
}

doCountCharactersOfText("tobias");

// funktion, in die ich liste mit zahlen sende und als antwort alle zahlen mal 3 bekomme
// x([1, 2, 3]) => [3, 6, 9]
// x(["a", 1])  => "nicht alles zahlen"
function doMultiplyBy3(numbers) {
  if (numbers.every((number) => typeof number === "number")) {
    return numbers.map((number) => number * 3);
  } else {
    return "nicht alles zahlen";
  }
}

doMultiplyBy3([1, 2, 3]);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// funktion, in die ich text sende und als antwort bekomme, wieviele "a" drin sind
// x("banane") => 2
// x("peter")  => 0
// x(123)      => "kein text"

// funktion, in die ich liste mit zahlen sende und als antwort die endsumme erhalte
// x([1, 2, 3])   => 6
// x(["a", 2, 3]) => 5
