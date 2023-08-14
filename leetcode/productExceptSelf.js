export const productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    answer[i] = Math.abs(answer[i] * leftProduct);
    leftProduct *= nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] = Math.abs(answer[j] * rightProduct);
    rightProduct *= nums[j];
  }
  return answer;
};
