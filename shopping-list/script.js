console.log("javascript running");

const shoppingList = {
  items: [],
  displayItems() {
    console.log(this.items);
  },
  addItem(itemTitle) {
    if (itemTitle) {
      const newItem = {
        name: itemTitle,
        isDone: false,
      };

      this.items.push(newItem);
    }
  },
  deleteItem(position) {
    if (position > 0) {
      const realPosition = position - 1;
      this.items.splice(realPosition, 1);
    }
  },
};
