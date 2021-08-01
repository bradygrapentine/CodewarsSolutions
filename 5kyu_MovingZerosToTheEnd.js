var moveZeros = function (arr) {
  let lastIndPlusOneOrig = arr.length
  let index = 0
  let count = 0
  while (count <= lastIndPlusOneOrig) {
    count++
    index++
    if (arr[index] === 0) {
      arr.splice(index,1)
      arr.push(0)
      index--
    }
  }
  if (arr[0] === 0) {
    arr.splice(0, 1)
    arr.push(0)
  }
  return arr
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0
