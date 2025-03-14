type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Sajid",
  age: 20,
  isStudent: true,
  address: {
    street: "Sadar Ghat",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

let person2: Person = {
  name: "Roqib",
  age: 20,
  isStudent: true,
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

let people: Array<Person> = [];
people.push(person1);
people.push(person2);
// console.log(person1);

console.log(people);

displayInfo(person1);

const student = [
  { name: "Saif", roll: 1 },
  { name: "Farok", roll: 3 },
  { name: "kafi", roll: 5 },
];

const roll = [1, 3, 5];
const nam = ["Saif", "Farok", "kafi"];

function getLastElement<type>(Array: type[]): type | undefined {
  return Array[Array.length - 1];
}

console.log(getLastElement(nam));
console.log(getLastElement(roll));
console.log(getLastElement(student));
