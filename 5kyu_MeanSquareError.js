var solution = function(firstArray, secondArray) {
  let meanSquaredSums = 0
  for (let i = 0; i < firstArray.length; i++) {
    meanSquaredSums += (firstArray[i] - secondArray[i])**2
  }
  return meanSquaredSums/firstArray.length
}

// https://www.codewars.com/kata/51edd51599a189fe7f000015
