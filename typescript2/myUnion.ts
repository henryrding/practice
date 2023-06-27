let score: number | string = 33;
score = 44;
score = '55';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let henry: User | Admin = { name: 'henry', id: 111 };
henry = { username: 'henryrding', id: 111 };

console.log('score:', score);
console.log('henry:', henry);

function getDbId(id: number | string) {
  // API calls
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId('3');

function getDbId2(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

getDbId2('A123');

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ['1', '2', '3', '4'];
const data3: (string | number)[] = [1, 2, '3'];
console.log(data, data2, data3);

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle';
seatAllotment = 'window';
console.log(seatAllotment);

export {};
