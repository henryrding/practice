function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const addTwoNumbers = function (l1, l2) {
  // let carry = 0;
  // const sumNode = new ListNode();
  // let currentSumNode = sumNode;
  // while (l1 || l2) {
  //   const num1 = l1 && l1.val;
  //   const num2 = l2 && l2.val;
  //   const sum = num1 + num2 + carry;
  //   carry = Math.floor(sum / 10);
  //   currentSumNode.next = new ListNode(sum % 10);
  //   currentSumNode = currentSumNode.next;
  //   l1 && (l1 = l1.next);
  //   l2 && (l2 = l2.next);
  // }
  // carry > 0 && (currentSumNode.next = new ListNode(carry));
  // return sumNode.next;

  // const sumNode = new ListNode(0);
  // let currentSumNode = sumNode;
  // let sum = 0;
  // let carry = 0;

  // while (l1 !== null || l2 !== null || sum > 0) {
  //   if (l1 !== null) {
  //     sum = sum + l1.val;
  //     l1 = l1.next;
  //   }
  //   if (l2 !== null) {
  //     sum = sum + l2.val;
  //     l2 = l2.next;
  //   }
  //   if (sum >= 10) {
  //     carry = 1;
  //     sum = sum - 10;
  //   }

  //   currentSumNode.next = new ListNode(sum);
  //   currentSumNode = currentSumNode.next;

  //   sum = carry;
  //   carry = 0;
  // }

  // return sumNode.next;

  let carry = 0;
  const sumNode = new ListNode();
  let currentSumNode = sumNode;
  while (l1 || l2) {
    const num1 = l1 && l1.val;
    const num2 = l2 && l2.val;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    currentSumNode.next = new ListNode(sum % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    currentSumNode = currentSumNode.next;
  }
  if (carry > 0) currentSumNode.next = new ListNode(carry);
  return sumNode.next;
};
