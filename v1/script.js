d3.select("h1")
  .style("color", "purple")
  .text("D3 for Pros");

const myData = [10, 20, 30, 40, 50];

d3.select(".chart01")
  .selectAll("div")
  .data(myData)
    .enter()
    .append("div")
    .text((value) => value)
    .style("width", (value) => `${value * 3}px`);
