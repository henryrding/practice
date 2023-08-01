export const searchInsert = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    nums.push(target);
    return nums.sort((a, b) => a - b).indexOf(target);
  }
  return nums.indexOf(target);
};
