interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printNumber(n: number): number;
  printTite: (message: string) => string;
  printIsbn(): void;
}

const deepWork: Book = {
  isbn: 32,
  title: "C programming",
  author: "Herbert Scield",
  genre: "CSE",
  printNumber: (n: number) => {
    return n;
  },
  printTite: function (message: string) {
    return `${this.title} is ${message}`;
  },
  printIsbn() {
    console.log(`${this.isbn}`);
  },
};

deepWork.printIsbn();
console.log(deepWork.printTite("Awesome book"));
console.log(deepWork.printNumber(56));

interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  id: number;
  getDetails(): string;
}

const employee: Employee = {
  name: "sajid",
  age: 35,
  id: 3,
  getDetails() {
    return `Employee name:${this.name} age:${this.age}`;
  },
};
console.log(employee.getDetails());
function getEmployee(): Person | Employee {
  let x: number = Math.random();

  if (x < 0.5) {
    return {
      name: "sajid",
      age: 35,
      id: 3,
      getDetails() {
        return `Employee name:${this.name} age:${this.age}`;
      },
    };
  } else {
    return {
      name: "sajid",
      age: 35,
    };
  }
}
const emp: Person | Employee = getEmployee();
console.log(emp);
