'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
let score = 33;
score = 44;
score = '55';
let henry = { name: 'henry', id: 111 };
henry = { username: 'henryrding', id: 111 };
console.log('score:', score);
console.log('henry:', henry);
function getDbId(id) {
  // API calls
  console.log('DB id is: '.concat(id));
}
getDbId(3);
getDbId('3');
function getDbId2(id) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}
getDbId2('A123');
// array
const data = [1, 2, 3, 4];
const data2 = ['1', '2', '3', '4'];
const data3 = [1, 2, '3'];
console.log(data, data2, data3);
let seatAllotment;
seatAllotment = 'aisle';
seatAllotment = 'window';
console.log(seatAllotment);
