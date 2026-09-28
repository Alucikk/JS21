// Завдання 1.
console.log("10" + 5, typeof ("10" + 5));
console.log("10" - 5, typeof ("10" - 5));
console.log("10" * "2", typeof ("10" * "2"));
console.log(10 + true, typeof (10 + true));
console.log(10 + false, typeof (10 + false));
console.log(Number("125 грн"), typeof Number("125 грн"));
console.log(Number(""), typeof Number(""));
console.log(Boolean("false"), typeof Boolean("false"));
console.log(Boolean(""), typeof Boolean(""));

//Завдання 2
const items = [
  { name: "Шоколадка", price: 95, quantity: 3 },
  { name: "Желейки черв'ячки", price: 22, quantity: 5 },
  { name: "Зошити 5 шт", price: 90, quantity: 2 }
];
const pdv = 0.20;

function ItemCostCalculator(price, quantity) {
  return price * quantity;
}
function OrderSumCalculator(orderItems, pdv) {
  let totalSum = 0;
  const pdvArray = [];

  for (const item of orderItems) {
    const itemCost = ItemCostCalculator(item.price, item.quantity);
    const itemPdv = itemCost * pdv;

    totalSum += itemCost;
    pdvArray.push({ name: item.name, vat: itemPdv });
  }
  console.log(pdvArray);
  return totalSum;
}
const totalOrderSum = OrderSumCalculator(items, pdv);
console.log("Загальна вартість замовлення:", totalOrderSum);