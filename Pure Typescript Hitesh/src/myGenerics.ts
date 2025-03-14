function identity<T>(val: T): T {
  return val;
}

identity("Sajid");
identity(6);

interface Bottle {
  brand: string;
  quantity: number;
}

function identityOne<Bottle>(params: Bottle): Bottle {
  return params;
}

function getSearchProducts<T>(products: T[]): T {
  const searchIndex = 3;
  return products[searchIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const searchIndex = 3;
  return products[searchIndex];
};

function another<T extends Bottle, U>(one: U, two: T) {
  return {
    one,
    two,
  };
}

another("cold drinks", { brand: "7up", quantity: 5 });

interface Quize {
  name: string;
  type: number;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  public addToCart(product: T) {
    this.cart.push(product);
  }
}
