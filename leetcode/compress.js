export const compress = function (chars) {
  // let index = 1;
  // let count = 1;
  // let current = chars[0];
  // for (let i = 1; i < chars.length; i++) {
  //     if (chars[i] !== current && count > 1) {
  //         for (const digit of count.toString()) {
  //             chars[index++] = digit;
  //         }
  //         current = chars[i];
  //         chars[index] = current;
  //         index++;
  //         count = 1;
  //     } else if (chars[i] !== current) {
  //         current = chars[i];
  //         chars[index] = current;
  //         index++;
  //         count = 1;
  //     } else {
  //         count++
  //     }
  // }
  // if (count > 1) {
  //     for (const digit of count.toString()) {
  //         chars[index++] = digit;
  //     }
  // }
  // return index;

  let index = 0;
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (i < chars.length - 1 && chars[i] === chars[i + 1]) {
      count++;
    } else {
      chars[index] = chars[i];
      index++;
      if (count > 1) {
        for (const digit of count.toString()) {
          chars[index] = digit;
          index++;
        }
      }
      count = 1;
    }
  }
  return index;
};
