function truncateString(str, num) {
  // solution 1:
  // if (str.length > num) {
  //   return str.slice(0, num) + "...";
  // } else {
  //   return str;
  // }

  // solution 2:
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
