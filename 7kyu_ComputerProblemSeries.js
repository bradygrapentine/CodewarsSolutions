function save(sizes, hd) {
  let count = 0
  let result = 0
  for (let i = 0; i < sizes.length; i++){ 
    if ((result + sizes[i]) <= hd) {
      result += sizes[i]
      count++
      console.log([sizes[i], result, count, hd])
    }
    else {
      break
    }
  }
  return count
}


// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/solutions/javascript
