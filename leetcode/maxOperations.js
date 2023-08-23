export const maxOperations = function (nums, k) {
  // let i = 0;
  // let operations = 0;
  // while (i < nums.length) {
  //     const difference = k - nums[i];
  //     const differenceIndex = nums.lastIndexOf(difference);
  //     if (differenceIndex !== -1 && i !== differenceIndex) {
  //         nums = nums.filter((num, index) => (index !== i && index !== differenceIndex));
  //         operations++;
  //     } else {
  //         i++;
  //     }
  // }
  // return operations;

  const map = new Map();
  let operations = 0;
  for (let i = 0; i < nums.length; i++) {
    const difference = k - nums[i];
    if (map.has(difference)) {
      if (map.get(difference) === 1) {
        map.delete(difference);
      } else {
        map.set(difference, map.get(difference) - 1);
      }
      operations++;
    } else {
      map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
  }
  return operations;
};
