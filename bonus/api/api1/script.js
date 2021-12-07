function createListItems(coins) {
  const list = document.querySelector(".coins-list");

  for (coin of coins) {
    const listItem = document.createElement("li");
    listItem.textContent = coin.name + ": " + coin.price;

    list.appendChild(listItem);
  }
}

async function getApiData() {
  try {
    const API_URL = "https://api.coincap.io/v2/assets";
    const response = await fetch(API_URL);
    const responseData = await response.json();
    const data = responseData.data;

    const coins = [];

    for (let i = 0; i < 5; i++) {
      const coinObject = {
        name: data[i].name,
        price: Number(data[i].priceUsd).toFixed(1),
        change: data[i].changePercent24Hr,
      };

      coins.push(coinObject);
    }

    createListItems(coins);
  } catch (error) {
    console.log("Network error: ", error);
  }
}

getApiData();
