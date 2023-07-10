'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function addTwo(number) {
  return number + 2;
}
addTwo(5);
function getUpper(value) {
  return value.toUpperCase();
}
getUpper('henry');
function signUpUser(name, email, password, isPaid) {
  console.log(name, email, password, isPaid);
}
signUpUser('henry', 'henry@example.com', 'password', false);
const loginUser = function (name, email, password, isPaid) {
  if (isPaid === undefined) {
    isPaid = false;
  }
  console.log(name, email, password, isPaid);
};
loginUser('h', 'h@h.com', 'password');
// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true
//   }
//   return "200 OK"
// }
const getHello = function (s) {
  return s;
};
getHello('');
const heroes = ['superman', 'batman', 'flash'];
heroes.map(function (hero) {
  return 'hero is '.concat(hero);
});
function consoleError(errorMessage) {
  console.log(errorMessage);
}
consoleError('oopsies');
function handleError(errorMessage) {
  throw new Error(errorMessage);
}
handleError('oopsies');
