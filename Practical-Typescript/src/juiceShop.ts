type Fruit = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  fruit: Fruit;
  status: "ordered" | "completed";
};

let cashInRegister: number = 100;
let nextFruitId = 1;
let nextOrderId = 1;
let orderQueue: Order[] = [];

const menu: Fruit[] = [
  { id: nextFruitId++, name: "Watermilon", price: 56 },
  { id: nextFruitId++, name: "Orange", price: 48 },
  { id: nextFruitId++, name: "Licy", price: 64 },
  { id: nextFruitId++, name: "Banana", price: 25 },
];

function addNewFruit(fruitObj: Omit<Fruit, "id">): Fruit {
  const newFruit: Fruit = {
    id: nextFruitId++,
    ...fruitObj,
  };
  menu.push(newFruit);
  return newFruit;
}

function placeOrder(fruitName: string): Order | undefined {
  const selectedFruit = menu.find((fruit) => fruit.name === fruitName);
  if (!selectedFruit) {
    console.error(`${fruitName} doesn't exist in the menu`);
    return;
  }
  cashInRegister += selectedFruit.price;
  const newOrder: Order = {
    id: nextOrderId++,
    fruit: selectedFruit,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} is not found in ${orderQueue}`);
    return;
  }
  order.status = "completed";
  return order;
}

function getFruitDetails(identifier: string | number): Fruit | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (fruit) => fruit.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((fruit) => fruit.id === identifier);
  } else {
    throw new TypeError("Parameter `identifier` must be a string or number");
  }
}

function addToArray<Type>(array: Type[], item: Type): Type[] {
  array.push(item);
  return array;
}

addToArray<Fruit>(menu, { id: nextFruitId++, name: "Pineapple", price: 29 });
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  fruit: menu[2],
  status: "completed",
});

addNewFruit({ name: "Strawberry", price: 29 });
addNewFruit({ name: "Lemon", price: 56 });
addNewFruit({ name: "Olive", price: 43 });
addNewFruit({ name: "Mango", price: 88 });

placeOrder("Lemon");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash In Register:", cashInRegister);
console.log("Order In Queue:", orderQueue);

console.log(getFruitDetails(7));
console.log(getFruitDetails("Banana"));
