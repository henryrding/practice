export const asteroidCollision = function (asteroids) {
  const result = [];
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];
    if ((result.length === 0 || result[result.length - 1] < 0) && a < 0) {
      result.push(a);
    } else if (a > 0) {
      result.push(a);
    } else {
      const potentialCollision = result.pop();
      if (Math.abs(potentialCollision) > Math.abs(a)) {
        result.push(potentialCollision);
      } else if (Math.abs(potentialCollision) < Math.abs(a)) {
        i--;
      } else {
        continue;
      }
    }
  }
  return result;
};
