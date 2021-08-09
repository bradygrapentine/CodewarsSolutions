function rot13(str) {
  return str.split('').map(function(chr) {
    let num = chr.charCodeAt(0)
    if (((num < 110) && (num > 96)) ||  ((num < 78) && (num > 64))) {
      num += 13
      return String.fromCharCode(num)
    } else if (((num < 123) && (num > 109)) ||  ((num < 91) && (num > 77))) {
      num -= 13
      return String.fromCharCode(num)
    } else {
      return chr
    }
  }).join('')
}

// https://www.codewars.com/kata/52223df9e8f98c7aa7000062
