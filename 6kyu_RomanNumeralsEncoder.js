function solution(number) {
  let result = ""
  const thousands = Math.floor(number / 1000)
  while (result.length < thousands) {
    result += "M"
  }
  let numAfter1000s = number - (1000 * thousands)
  const hundreds = Math.floor(numAfter1000s / 100)
  if (hundreds == 9) {
    result += "CM"
  } else if (hundreds == 5) {
    result += "D"
  } else if (hundreds < 5) {
    if (hundreds == 4) {
      result += "CD"
    } else {
      for (var i = 1; i <= hundreds; i++) {
        result += "C"
      }
    }
  } else {
    result += "D"
    for (var j = 1; j <= (hundreds - 5); j++) {
      result += "C"
    }
  }
  let numAfter100s = numAfter1000s - (100 * hundreds)
  const tens = Math.floor(numAfter100s / 10)
  if (tens == 9) {
    result += "XC"
  } else if (tens == 5) {
    result += "L"
  } else if (tens < 5) {
    if (tens == 4) {
      result += "XL"
    } else {
      for (var i = 1; i <= tens; i++) {
        result += "X"
      }
    }
  } else {
    result += "L"
    for (var j = 1; j <= (tens - 5); j++) {
      result += "X"
    }
  }
  let numAfter10s = numAfter100s - (10 * tens)
  const ones = Math.floor(numAfter10s)
  if (ones == 9) {
    result += "IX"
  } else if (ones == 5) {
    result += "V"
  } else if (ones < 5) {
    if (ones == 4) {
      result += "IV"
    } else {
      for (var i = 1; i <= ones; i++) {
        result += "I"
      }
    }
  } else {
    result += "V"
    for (var j = 1; j <= (ones - 5); j++) {
      result += "I"
    }
  }
  return result
}

// https://www.codewars.com/kata/51b62bf6a9c58071c600001b
