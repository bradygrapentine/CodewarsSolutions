function findEvenIndex(arr)
{
  if (arr.length == 1) { return 0 }
  else if (0 === arr.slice(1, arr.length).reduce((sum, c) => sum + c)) { return 0 }
  else if (0 === arr.slice(0, arr.length-1).reduce((sum, c) => sum + c)) { return arr.length - 1}
  for (let i = 1; i < arr.length - 1; i++) {
    let leftSum = arr.slice(0, i).reduce((sum, c) => sum + c)
    let rightSum = arr.slice(i+1, arr.length).reduce((sum, c) => sum + c) 
    if (leftSum === rightSum) {return i}
  }
  return -1
}

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
