function addTwo(params: number): Number {
  return params + 2;
  // return "hello";
}
console.log(addTwo(5));

const getHello = (s: string): string => {
  return s;
};

const heros = ["Spiderman", "Ironman", "Thorr"];
// const heros = [1, 2, 3];

heros.map((hero: string): string => {
  return `hreo is ${hero}`;
});

function consoleError(error: string): void {
  console.log(error);
}

export {};
