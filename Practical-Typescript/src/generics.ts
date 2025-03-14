let array1: Array<number> = [1, 2, 3, 4];

console.log(array1);

function genericsType<T>(params: T): T {
  return params;
}

const arr1 = genericsType(array1);

let array2: Array<string> = ["Sajid", "Kalam", "Barasat"];
const arr2 = genericsType(array2);
console.log(arr1);
console.log(arr2);

console.log(genericsType<number>(9));
console.log(genericsType<string>("Kalim"));

interface genericInterface<T> {
  value: T;
  getValue: () => T;
}

const me: genericInterface<string> = {
  value: "Sajid",
  getValue() {
    return `My name is ${this.value}`;
  },
};
console.log(me);
console.log(me.getValue());

async function someFunc(): Promise<string> {
  return "Sakip";
}

console.log(someFunc());

function createArray<T>(len: number, value: T): Array<T> {
  let arr: T[] = [];

  arr = Array(len).fill(value);

  return arr;
}

console.log(createArray(5, 0));
console.log(createArray(5, false));
console.log(createArray(5, "1"));

function pair<T, U>(name: T, age: U): [T, U] {
  return [name, age];
}

console.log(pair("Sajid", 20));

function processValue<T extends string | number>(params: T): T {
  return params;
}
console.log(processValue("Sajid"));
console.log(processValue(334));

interface storeData<T> {
  data: T[];
}

const storeNumber: storeData<number> = {
  data: [1, 2, 3, 4, 5, 5],
};
const storeName: storeData<string> = {
  data: ["Sajid", "Kalim", "Sufian"],
};
const storeAny: storeData<any> = {
  data: ["Sajid", 895, false],
};
console.log(storeNumber.data);
console.log(storeName.data);
console.log(storeAny.data);
