export const guessNumber = function (n, pick) {
  const guess = (num) => {
    switch (true) {
      case num > pick:
        return -1;
      case num < pick:
        return 1;
      case num === pick:
        return 0;
    }
  };

  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const result = guess(mid);
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
