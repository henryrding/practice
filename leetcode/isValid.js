export const isValid = function (s) {
  if (s.length % 2 !== 0 || s[0] === (')' || '}' || ']')) {
    return false;
  }

  // let string = s;
  // const regex = /\(\)|\{\}|\[\]/g;

  // let replaced;
  // do {
  //   replaced = false;
  //   string = string.replace(regex, () => {
  //     replaced = true;
  //     return '';
  //   });
  // } while (replaced);

  // return string.length === 0;

  // const map = {
  //   ')': '(',
  //   ']': '[',
  //   '}': '{',
  // };

  // const brackets = [];
  // for (let i = 0; i < s.length; i++) {
  //   switch (s[i]) {
  //     case '(':
  //       brackets.push('(');
  //       break;
  //     case '[':
  //       brackets.push('[');
  //       break;
  //     case '{':
  //       brackets.push('{');
  //       break;
  //     default:
  //       if(map[s[i]] !== brackets.pop()) {
  //         return false;
  //       }
  //   }
  // }
  // return brackets.length === 0;

  const closeBrackets = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        closeBrackets.push(')');
        break;
      case '[':
        closeBrackets.push(']');
        break;
      case '{':
        closeBrackets.push('}');
        break;
      default:
        if (s[i] !== closeBrackets.pop()) {
          return false;
        }
    }
  }
  return closeBrackets.length === 0;
};
