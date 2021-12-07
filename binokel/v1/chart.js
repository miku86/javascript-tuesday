console.log("running");

const svgWidth = 300;
const svgHeight = 300;
const svgBackgroundcolor = "grey";

const container = d3
  .select(".chart")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("background-color", svgBackgroundcolor);

const playersData = [100, 200, 300];

const barWidth = svgWidth / playersData.length;
const barPadding = 5;
const rectWidth = 40;

container
  .selectAll("g")
  .data(playersData)
  .enter()
  .append("g")
  .append("rect")
  .attr("y", function (d) {
    return svgHeight - d;
  })
  .attr("height", function (d) {
    return d;
  })
  .attr("width", rectWidth)
  .attr("transform", function (d, i) {
    const translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });

container
  .selectAll("g")
  .append("text")
  .attr("x", function (d, i) {
    return barWidth * i + rectWidth / 2;
  })
  .attr("y", svgHeight - 20)
  .style("fill", "darkOrange")
  .style("text-anchor", "middle")
  .text(function (d, i) {
    return i + 1;
  });
