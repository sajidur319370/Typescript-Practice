console.log("Sajidur Rahman");

function sum(message: string, ...numbers: number[]) {
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 5);
  return `${message}:${total}`;
}

let result = sum("The total is", 1, 2, 3, 4, 5);
console.log(result);

function User({ id }: { id: number }): { id: number; isActive: boolean } {
  return { id: id, isActive: id % 2 === 0 };
}

console.log(User({ id: 2 }));
console.log(User({ id: 3 }));

function processData(
  input: number | string,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

const processedData = processData("Sajid", { reverse: true });
console.log(processedData);

type User = {
  name: string;
  id: number;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

console.log(createUser({ name: "Saif", id: 1, isActive: true }));
