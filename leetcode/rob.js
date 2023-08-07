export const rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let house1 = nums[0];
  let house2 = Math.max(house1, nums[1]);
  if (nums.length === 2) {
    return house2;
  }
  let max = 0;
  for (let i = 2; i < nums.length; i++) {
    max = Math.max(house1 + nums[i], house2);
    house1 = house2;
    house2 = max;
  }
  return max;
};
