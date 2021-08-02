function multiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString()
}

// function multiply(a, b) {
//   a = a[0] === '0' ? BigInt(a.slice(1)) : BigInt(a)
//   b = b[0] === '0' ? BigInt(b.slice(1)) : BigInt(b)
//   return (a * b).toString()
// }

// https://www.codewars.com/kata/55911ef14065454c75000062
