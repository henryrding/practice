export const mergeIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let left = intervals[0][0];
  let right = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const currLeft = intervals[i][0];
    const currRight = intervals[i][1];
    if (currLeft >= left && currLeft <= right && currRight >= right) {
      right = currRight;
    } else if (currLeft >= left && currLeft <= right && currRight <= right) {
      continue;
    } else {
      merged.push([left, right]);
      left = intervals[i][0];
      right = intervals[i][1];
    }
  }
  merged.push([left, right]);
  return merged;
};
