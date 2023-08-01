export const removeElement = function (nums, val) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    } else {
      counter++;
    }
  }
  return counter;

  // for (let i = 0; i < nums.length; i++) {
  //     if(nums[i] === val) {
  //         nums.splice(i, 1);
  //         i--;
  //     }
  // }
  // return nums.length;

  // let index = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== val) {
  //         nums[index] = nums[i];
  //         index++;
  //     }
  // }
  // return index;

  // while (nums.indexOf(val, 0) >= 0) {
  //   nums.splice(nums.indexOf(val, 0), 1);
  // }
  // return nums.length;
};
