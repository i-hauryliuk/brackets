module.exports = function check(str, bracketsConfig) {
  
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {    // same brackets
        if (stack[stack.length - 1] === str[i]) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
        break;
      } else {    // different brackets
        if (str[i] === bracketsConfig[j][0]) {
          stack.push(str[i]);
          break;
        } else if (str[i] === bracketsConfig[j][1]) {
          if (stack[stack.length - 1] === bracketsConfig[j][0]) {
            stack.pop();
            break;
          } else {
            return false;
          }
        }
      }
    }
  }

  return !stack.length;
}
