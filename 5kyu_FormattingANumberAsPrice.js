var numberToPrice = function(number) {
  if (typeof number === 'number') {
    number = number.toString().split('.')
    let firstHalf = number[0].split('').reverse()
    let commaCounter = 0
    for (var i = 0; i < firstHalf.length; i++) {
      if (commaCounter === 3) {
        firstHalf.splice(i, 0, ",")
        commaCounter = 0
      } else {
        commaCounter++
      }
    }
    firstHalf = firstHalf.reverse().join('')
    firstHalf = firstHalf[0] === '-' && firstHalf[1] === ',' ? '-' + firstHalf.slice(2) : firstHalf
    if (number.length === 1) {
      return firstHalf + '.00' 
    } else {
      return firstHalf + '.' + number[1].slice(0,2).padEnd(2, '0')
    }
  } else {
    return 'NaN'
  }
}

// https://www.codewars.com/kata/5318f00b31b30925fd0001f8
