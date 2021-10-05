const API_URL = "https://api.coincap.io/v2/assets";

function createListEntry(coin) {
  const listItem = document.createElement("li");
  listItem.textContent = `${coin.name}: ${Number(coin.priceUsd).toFixed(2)}`;

  const coinsList = document.querySelector(".coins");
  coinsList.appendChild(listItem);
}

async function main() {
  try {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    const data = responseJson.data.slice(0, 20);

    data.map((entry) => createListEntry(entry));
  } catch (error) {
    console.log("Network problem");
  }
}

main();
