export const buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  const diffIndex = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffIndex.push(i);
      if (diffIndex.length > 2) {
        return false;
      }
    }
  }
  if (diffIndex.length === 0) {
    return /(.*)(.).*\2/.test(s);
  }
  return (
    s[diffIndex[0]] === goal[diffIndex[1]] &&
    s[diffIndex[1]] === goal[diffIndex[0]]
  );
};
