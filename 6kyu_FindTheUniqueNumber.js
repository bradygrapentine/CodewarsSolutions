function findUniq(arr) {
  let lastNum = arr[arr.length - 1]
  let secondLastNum = arr[arr.length - 2]
  if (lastNum == secondLastNum) {
    for(let i = 0; i < arr.length - 2; i++) {
      if (arr[i] !== lastNum) {
        return arr[i]
      }
    }
  }
  else {
    if (lastNum != arr[0]) {
      return lastNum
    }
    else {
      return secondLastNum
    }
  }
}
