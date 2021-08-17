function twinPrime(n) {
  let incrementer = 3
  let count = 0
  let lastPrime = null
  while (incrementer <= n + 1 && n > 0) {
    let possibleTwin = incrementer
    for (var i = 2; i <= Math.sqrt(incrementer)+1; i++) {
      if (incrementer % i === 0) {
        possibleTwin = null
        break
      }
    }
    if (possibleTwin) {
      count = lastPrime !== null ? count + 1 : count
      lastPrime = possibleTwin
    } else {
      lastPrime = null
    }
    incrementer += 2
  }
  return count
}

// https://www.codewars.com/kata/596549c7743cf369b900021b
