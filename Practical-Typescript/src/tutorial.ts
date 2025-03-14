let myVar: any = "Book";
myVar = 3473;
myVar = false;

console.log(myVar);

const books: string[] = ["1221", "Willim Wordshowth", "Bicycle"];
let foundBook: string | undefined;
for (const book of books) {
  if (book === "1221") {
    foundBook = book;
    console.log(book);
    break;
  }
}
console.log(foundBook?.length);

let arr: (number | string | boolean)[] = [true, 2, 3, 5, "sas", "less"];
let names = [true, "sas", "less"];
console.log(names);
console.log(arr);
console.log(typeof [2]);
console.log(typeof { 3: 4 });
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof null);

let car: { readonly brand: string; year: number } = {
  brand: "Toyota",
  year: 2017,
};

car.year = 2023;

let cars: (typeof car)[] = [
  { brand: "Toyota", year: 2017 },
  { brand: "Ford", year: 2023 },
  { brand: "Toyota", year: 2017 },
];
console.log(cars);

function claculateDiscount(price: number): number | string {
  if (price >= 0) {
    return (price * 0.1).toPrecision(3);
  }
  return "price cannot be less than 0".toLocaleUpperCase();
}

console.log("discount:", claculateDiscount(87));
console.log("discount:", claculateDiscount(-23));

function add(number1: number, number2?: number) {
  return number1 + (number2 || 0);
}
console.log(add(5, 8));
