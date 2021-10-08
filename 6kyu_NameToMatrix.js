const matrixfy = str => {
  if (str === '') return 'name must be at least one letter'
  let n = Math.ceil(Math.sqrt(str.length))
  var result = []
  var count = 0
  str = str.padEnd(n**2, '.')
  for (let i = 0; i < n; i++) {
    result[i] = []
    for (let j = 0; j < n; j++) {
      result[i].push(str[count])
      count++
    }
  }
  return result
};

// https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e
