type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

const myUser: User = {
  _id: '123',
  name: 'Henry',
  email: 'henry@example.com',
  isActive: false,
};

myUser.email = 'henry@gmail.com';
// myUser._id='asa'

type cardNumber = {
  number: string;
};

type cardDate = {
  date: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

function storeCard(card: cardDetails) {
  console.log(card);
}

storeCard({ number: '123', date: '1/2/34', cvv: 123 });

export {};
