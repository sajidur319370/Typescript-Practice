class Book {
  author: string;
  readonly title: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut(): void {
    this.checkedOut = this.toggleCheckOut();
  }
  public isCheckOut() {
    return this.checkedOut;
  }
  private toggleCheckOut() {
    return !this.checkedOut;
  }
  get info() {
    return `${this.title} is written by ${this.author}`;
  }
  /* private set isChecked(a: boolean) {
    this.checkedOut = a;
  } */
}

const deepWork = new Book("C programming", "Herbart Schild");
console.log(deepWork);
deepWork.checkOut();
console.log(deepWork);
// console.log((deepWork.isChecked = false));
console.log(deepWork.info);
console.log(deepWork.isCheckOut());
console.log(deepWork);

interface Person {
  name: string;
  age: number;
  info(): string;
}

class Student implements Person {
  public roll: number;
  constructor(public name: string, public age: number, roll: number) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }
  info(): string {
    return `hello my name is${this.name} . I am ${this.age} years old `;
  }
}

const sajid = new Student("Sajid", 22, 1);
console.log(sajid);
console.log(sajid.info());
