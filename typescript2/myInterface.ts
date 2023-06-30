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

const henry: InterfaceUser = {
  dbId: 29,
  email: 'henry@example.com',
  userId: 410,
  startTrial: () => {
    return 'trial started';
  },
  getCoupon: (couponname: '10OFF', off: 10) => {
    return 10;
  },
};
