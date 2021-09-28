function uncollapse(digits){
  let result = []
  let currentDig = ''
  const validDigs = ['zero','one','two','three','four','five','six','seven','eight','nine']
  for (var i = 0; i < digits.length; i++) {
    currentDig += digits[i]
    if (validDigs.includes(currentDig)) {
      result.push(currentDig)
      currentDig = ''
    }
  }
  return result.join(' ')
}

// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c
