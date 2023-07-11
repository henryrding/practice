export const twoSum = function (nums, target) {
  // for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i+1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j]
  //         }
  //     }
  // }
  // for (let i = 0; i < nums.length - 1; i++) {
  //     const missing = target - nums[i]
  //     if (nums.indexOf(missing, i+1) !== -1) {
  //         return [i, nums.indexOf(missing, i+1)]
  //     }
  // }
  // let map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //     let missing = target - nums[i];
  //     if (map.has(missing)) {
  //         return [i, map.get(missing)]
  //     }
  //     map.set(nums[i], i);
  // }
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const missing = target - nums[i];
    if (missing in map) {
      return [i, map[missing]];
    }
    map[nums[i]] = i;
  }
};
