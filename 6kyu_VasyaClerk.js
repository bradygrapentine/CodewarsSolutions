function tickets(peopleInLine){
  let bills = { 25: 0, 50: 0, 100: 0 }
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 100) {
      if (bills[25] >= 1 && bills[50] >= 1) {
        bills[25]--
        bills[50]--
      } else if (bills[25] >= 3) {
        bills[25] -= 3
      } else {
        return "NO"
      }
      bills[100]++
    } else if (peopleInLine[i] == 50) {
      if (bills[25] >= 1) {
        bills[25]--
      } else {
        return "NO"
      }
      bills[50]++
    } else {
      bills[25]++
    }
  }
  return "YES"
}

// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
