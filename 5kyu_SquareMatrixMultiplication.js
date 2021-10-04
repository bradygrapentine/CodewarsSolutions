function matrixMultiplication(a, b){
  let result = []
  let n = a.length
  for (let i = 0; i < n; i++) {
    result[i] = []
    for (let j = 0; j < n; j++) {
      result[i][j] = 0
      for (let k = 0; k < n; k++) {
        result[i][j] += a[i][k] * b[k][j]
      }
    }
  }
  return result
}

// https://www.codewars.com/kata/5263a84ffcadb968b6000513
