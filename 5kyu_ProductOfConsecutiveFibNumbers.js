function productFib(prod){
  let lastFib = 0
  let firstFib = 0
  let secondFib = 1
  let searching = true
  let result = []
  while (searching) {
    if (firstFib * secondFib < prod) {
      lastFib = firstFib
      firstFib = secondFib
      secondFib = lastFib + secondFib
    } else if (firstFib * secondFib > prod) {
      result = [firstFib, secondFib, false]
      searching = false
    } else {
      result = [firstFib, secondFib, true]
      searching = false      
    }
  }
  return result
}

// https://www.codewars.com/kata/5541f58a944b85ce6d00006a
