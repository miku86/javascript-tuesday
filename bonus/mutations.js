function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  let noneIsMissing = true;

  for (let character of secondWord) {
    const isInWord = firstWord.includes(character);
    if (!isInWord) {
      noneIsMissing = false;
    }
  }

  return noneIsMissing;
}

mutation(["hello", "Hey"]);
