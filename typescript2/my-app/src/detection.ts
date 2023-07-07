/* eslint-disable @typescript-eslint/no-unused-vars */

function detectType(val: number | string) {
  if (typeof val === 'string') {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide id');
    return;
  }
  return id.toLowerCase();
}

// doesn't handle empty string ''
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// in operator narrowing
function isAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
}

// instance of narrowing
function logValue(val: Date | string) {
  if (val instanceof Date) {
    console.log(val.toUTCString());
  } else {
    console.log(val.toUpperCase());
  }
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return 'Fish food';
  } else {
    return 'Bird Food';
  }
}

export {};
