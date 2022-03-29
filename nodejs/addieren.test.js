const addieren = require("./addieren.js");

const errorMessage = "Fehler: Bitte geben Sie 2 Zahlen ein";

test("1+1=2", () => {
  expect(addieren(1, 1)).toBe(2);
});

test("5+3=8", () => {
  expect(addieren(5, 3)).toBe(8);
});

test("1+a=false", () => {
  expect(addieren(1, "a")).toBe(errorMessage);
});

test("1=false",()=>{
    expect(addieren(1)).toBe(errorMessage);
})

test("'1'+'1'=2",()=>{
    expect(addieren("1", "1")).toBe(errorMessage)
})

test("nichts eingegeben=false",()=>{
    expect(addieren()).toBe(errorMessage)
})
