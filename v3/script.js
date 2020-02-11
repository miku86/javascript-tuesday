function setClockTime() {
  const now = new Date();

  // set the hands for seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  d3.select(".seconds-hand")
    .style("transform", `rotate(${secondsDegrees}deg)`)
    .style("height", "2px");

  // set the hands for minutes
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  d3.select(".mins-hand")
    .style("transform", `rotate(${minsDegrees}deg)`);

  // set the hands for hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  d3.select(".hours-hand")
    .style("transform", `rotate(${hoursDegrees}deg)`);
}

setInterval(setClockTime, 1000);