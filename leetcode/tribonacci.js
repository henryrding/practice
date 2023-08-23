export const tribonacci = function (n) {
  const sequence = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    sequence.push(sequence[i - 3] + sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[n];
};
