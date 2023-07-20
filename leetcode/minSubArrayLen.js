export const minSubArrayLen = function (target, nums) {
  // let leftIndex = 0;
  // let sum = 0;
  // let minLength = Infinity;
  // for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
  //   sum += nums[rightIndex];
  //   while (sum >= target) {
  //     const distance = rightIndex - leftIndex + 1;
  //     minLength = Math.min(minLength, distance);
  //     sum -= nums[leftIndex];
  //     leftIndex++;
  //   }
  // }
  // return minLength === Infinity ? 0 : minLength;
  let leftIndex = 0;
  let sum = 0;
  let minLength = 0;
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    sum += nums[rightIndex];
    while (sum >= target) {
      const distance = rightIndex - leftIndex + 1;
      if (minLength === 0 || distance < minLength) minLength = distance;
      sum -= nums[leftIndex];
      leftIndex++;
    }
  }
  return minLength;
};
