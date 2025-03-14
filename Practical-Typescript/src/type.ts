type Theme = "light" | "dark";

function name(theme: Theme): void {
  if (theme === "light") {
    console.log(theme);
    return;
  }
  if (theme === "dark") {
    console.log(theme);
    return;
  }

  console.log(theme);
}

name("dark");
enum Color {
  Red,
  Blue,
  Green,
}
function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    case Color.Green:
      return "Green";
    default:
      let unexpected: never = color;
      throw new Error(`Unexpected color value ${unexpected}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
// console.log(getColorName("Yellow"));

import { default as newPerson, person, sayHello } from "./action";

sayHello(person);
console.log(newPerson);

function printLength(name: string | null | undefined): void {
  if (name) {
    console.log(name);
  } else {
    console.log(typeof name);
  }
}

printLength("Sajid");
printLength(null);
console.log({});
console.log([]);
console.log();
printLength(undefined);

function checkInput(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.getFullYear().toString());
  }
  console.log(date);
}

checkInput(new Date());
checkInput("What about date?");

type Student = {
  name: string;
  study: () => void;
};
type User = {
  name: string;
  login: () => void;
};
type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? {
        name: "Sajid",
        study: () => {
          console.log("Studyng...");
        },
      }
    : {
        name: "Rasel",
        login: () => {
          console.log("Loging....");
        },
      };
};
const people = randomPerson();
function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}

if (isStudent(people)) {
  people.study();
} else {
  people.login();
}
