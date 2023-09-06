export const summaryRanges = function (nums) {
  let start = 0;
  let end = 0;
  let index = 0;
  const ranges = [];

  while (index < nums.length) {
    if (nums[end] + 1 === nums[end + 1]) {
      end++;
    } else {
      ranges.push(
        start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`
      );
      start = end + 1;
      end++;
    }
    index++;
  }

  return ranges;
};
