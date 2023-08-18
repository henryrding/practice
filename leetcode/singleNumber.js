export const singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.delete(nums[i]) : map.set(nums[i], 1);
  }
  return map.keys().next().value;
};
