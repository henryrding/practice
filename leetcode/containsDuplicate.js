export const containsDuplicate = function (nums) {
  if (nums.length <= 1) {
    return false;
  }
  // const sortedNums = nums.sort();
  // for (let i = 0; i < nums.length - 1; i++) {
  //   if (sortedNums[i] === sortedNums[i + 1]) {
  //     return true;
  //   }
  // }
  // return false;

  // const uniqueNums = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (uniqueNums.includes(nums[i])) {
  //     return true
  //   }
  //   uniqueNums.push(nums[i])
  // }
  // return false;

  const set = new Set();
  for (const uniqueNum of nums) {
    if (set.has(uniqueNum)) {
      return true;
    }
    set.add(uniqueNum);
  }
  return false;
};
