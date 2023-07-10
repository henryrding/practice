/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree('hello')

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: 'hydroflask', type: 3 });

function getSearchProducts<T>(products: T[]): T {
  // some database operations
  const myIndex = 3;
  return products[myIndex];
}

// comma is for denoting generic, not jsx syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
  // some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
  return { val1, val2 };
}

anotherFunction(3, { connection: 'a', username: 'b', password: 'c' });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
