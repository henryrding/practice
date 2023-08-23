export const pivotIndex = function (nums) {
  const sum = nums.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};
