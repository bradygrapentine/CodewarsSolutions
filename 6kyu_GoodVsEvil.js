function goodVsEvil(good, evil){
  let goodValues = [1, 2, 3, 3, 4, 10]
  let evilValues = [1, 2, 2, 2, 3, 5, 10]
  let goodScore = good.split(' ').reduce((score, count, i) => score + (goodValues[i] * Number(count)), 0)
  let evilScore = evil.split(' ').reduce((score, count, i) => score + (evilValues[i] * Number(count)), 0)

  if (goodScore > evilScore) {
    return "Battle Result: Good triumphs over Evil"
  } else if (goodScore < evilScore) {
    return "Battle Result: Evil eradicates all trace of Good"
  }
  return "Battle Result: No victor on this battle field"
}

// https://www.codewars.com/kata/52761ee4cffbc69732000738
