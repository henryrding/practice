export const canJump = function (nums) {
  let goal = nums.length - 1;
  for (let i = goal - 1; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }
  return goal === 0;
};
