export const countBits = function (n) {
  // const ans = [0];
  // for (let i = 1; i <= n; i++) {
  //     ans.push(i.toString(2).replace(/0/g, '').length);
  // }
  // return ans;

  const ans = new Array(n + 1);
  ans[0] = 0;
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[Math.floor(i / 2)] + (i % 2);
  }
  return ans;
};
