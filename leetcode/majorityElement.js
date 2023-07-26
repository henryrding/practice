export const majorityElement = function (nums) {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    numsObj[current] = numsObj[current] + 1 || 1;
    if (numsObj[current] > nums.length / 2) {
      return current;
    }
  }

  // const map = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //     const current = nums[i]
  //     map.set(current, map.has(current) ? map.get(current) + 1 : 1)
  //     if (map.get(current) > (nums.length / 2)) {
  //         return current;
  //     }
  // }

  // let candidate;
  // let count = 0;

  // for (const num of nums) {
  //   if (count === 0) {
  //     candidate = num;
  //   }
  //   count += num === candidate ? 1 : -1;
  // }
  // return candidate;
};
