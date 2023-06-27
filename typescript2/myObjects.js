'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const myUser = {
  _id: '123',
  name: 'Henry',
  email: 'henry@example.com',
  isActive: false,
};
myUser.email = 'henry@gmail.com';
function storeCard(card) {
  console.log(card);
}
storeCard({ number: '123', date: '1/2/34', cvv: 123 });
