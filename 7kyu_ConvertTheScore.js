function scoreboard(string) {
  const spltStr = string.split(' ')
  let result = []
  for (let i = 0; i < spltStr.length; i++) {
    switch(spltStr[i]) {
      case 'nil':
        result.push(0)
        break
      case 'one':
        result.push(1)
        break
      case 'two':
        result.push(2)
        break
      case 'three':
        result.push(3)
        break
      case 'four':
        result.push(4)
        break
      case 'five':
        result.push(5)
        break
      case 'six':
        result.push(6)
        break
      case 'seven':
        result.push(7)
        break
      case 'eight':
        result.push(8)
        break
      case 'nine':
        result.push(9)
        break
      default:
        break
    }
  }
  return result
}

// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
