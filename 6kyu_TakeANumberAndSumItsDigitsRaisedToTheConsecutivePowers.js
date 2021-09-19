function sumDigPow(a, b) {
  let result = []
  for (let i = a; i < b; i++) {
    if(i === i.toString().split('').reduce((total, dig, index) => total + Math.pow(Number(dig), index + 1), 0)) {
      result.push(i)
    }
  }
  return result
}

// https://www.codewars.com/kata/5626b561280a42ecc50000d1
