function transpose(matrix) {
  let transposedMatrix = []
  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = []
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i])
    }
    transposedMatrix[i] = newRow
  }
  return transposedMatrix
}

// https://www.codewars.com/kata/52fba2a9adcd10b34300094c
