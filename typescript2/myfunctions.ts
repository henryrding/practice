function addTwo(number: number): number {
  return number + 2;
}

addTwo(5);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper('henry');

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  console.log(name, email, password, isPaid);
}

signUpUser('henry', 'henry@example.com', 'password', false);

const loginUser = (
  name: string,
  email: string,
  password: string,
  isPaid = false
) => {
  console.log(name, email, password, isPaid);
};

loginUser('h', 'h@h.com', 'password');

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return s;
};

getHello('');

const heroes = ['superman', 'batman', 'flash'];
heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errorMessage: string): void {
  console.log(errorMessage);
}

consoleError('oopsies');

function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

handleError('oopsies');

export {};
