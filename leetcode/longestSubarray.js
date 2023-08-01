export const longestSubarray = function (nums) {
  let count = 0;
  const lengths = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      lengths.push(count);
      count = 0;
    }
  }
  if (count > 0) {
    lengths.push(count);
  }
  if (lengths.length === 1) return lengths[0] === 0 ? 0 : lengths[0] - 1;
  let longest = lengths[0] + lengths[1];
  for (let j = 1; j < lengths.length - 1; j++) {
    const length = lengths[j] + lengths[j + 1];
    if (length > longest) {
      longest = length;
    }
  }
  return longest;
};
