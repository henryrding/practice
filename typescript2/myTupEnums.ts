// const user:(string | number )[] = [1, "henry"]
const user: [string, number, boolean] = ['henry', 2, true];
console.log(user);

const rgb: [number, number, number] = [255, 123, 112];
console.log(rgb);

type User = [number, string];

const newUser: User = [112, 'henry@example.com'];
newUser[1] = 'henry@gmail.com';

console.log(newUser);

export {};
