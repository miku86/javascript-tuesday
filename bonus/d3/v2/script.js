d3.select(".chart02")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200)
  .style("border", "3px solid red")
  .style("background-color", "#DDD");

// rect
d3.select("svg")
  .append("rect")
  .attr("width", 50)
  .attr("height", 50)
  .style("fill", "blue");

// circle
d3.select("svg")
  .append("circle")
  .attr("r", 50)
  .attr("cx", 150)
  .attr("cy", 150)
  .style("fill", "yellow");

// line
d3.select("svg")
  .append("line")
  .attr("x1", 0)
  .attr("y1", 0)
  .attr("x2", 200)
  .attr("y2", 200)
  .style("stroke", "purple");
