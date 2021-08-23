var uniqueInOrder=function(iterable) {
  let result = []
  let last = null
  for (let i = 0; i < iterable.length; i++) {
    if (last === iterable[i]) {
      continue
    } else {
      result.push(iterable[i])
      last = iterable[i]
    }
  }
  return result
}

// https://www.codewars.com/kata/54e6533c92449cc251001667
