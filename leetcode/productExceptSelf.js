export const productExceptSelf = function (nums) {
  // const result = new Array(nums.length).fill(1);
  // let fp = 1;
  // let bp = 1;
  // for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
  //     result[i] *= fp;
  //     result[j] *= bp;
  //     fp *= nums[i];
  //     bp *= nums[j];
  // }
  // return result;

  // const result = new Array(nums.length).fill(1);
  // let fp = 1;
  // let bp = 1;
  // for (let i = 0; i < nums.length; i++) {
  //     result[i] *= fp;
  //     result[nums.length - 1 - i] *= bp;
  //     fp *= nums[i];
  //     bp *= nums[nums.length - 1 - i];
  // }
  // return result;

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
