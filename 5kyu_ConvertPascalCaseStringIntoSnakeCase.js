function toUnderscore(string) {
  if (typeof string === "number") {
    return string.toString()
  }
  let nums = /[0-9]/
  let stringAsArr = string.split('')
  for (var  i = 0; i < stringAsArr.length; i++) {
    if (nums.test(stringAsArr[i])) {
      continue;
    } else if (i === 0) {
      stringAsArr[i] = stringAsArr[i].toLowerCase()  
    } else if (stringAsArr[i] === stringAsArr[i].toUpperCase()) {
      stringAsArr.splice(i, 1, ('_' + stringAsArr[i].toLowerCase()))
      i++
    }
  }
  return stringAsArr.join('')
}

// https://www.codewars.com/kata/529b418d533b76924600085d
