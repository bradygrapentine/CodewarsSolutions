function nbYear(p0, percent, aug, p) {
  let result = 0
  
  while (p0 < p) {
    p0 = p0 + (p0 * (percent / 100)) + aug
    result++
  }
  
  return result
}

// function nbYear(p0, percent, aug, p) {
//   for (var i = 0; p0 < p; i++) p0 += (p0 * (percent/100)) + aug;
//   return i;
// }
