export const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    const lowerSide = Math.min(height[left], height[right]);
    const currentArea = (right - left) * lowerSide;
    if (currentArea > area) {
      area = currentArea;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
};
