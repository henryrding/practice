/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
interface InterfaceUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// reopening of the interface.
// eslint-disable-next-line no-redeclare
interface InterfaceUser {
  githubToken: string;
}

// inheritance.
interface Admin extends InterfaceUser {
  role: 'admin' | 'ta' | 'student';
}

const henry: Admin = {
  dbId: 29,
  email: 'henry@example.com',
  userId: 410,
  role: 'admin',
  githubToken: 'github',
  startTrial: () => {
    return 'trial started';
  },
  getCoupon: (couponname: '10OFF', off: 10) => {
    return 10;
  },
};
