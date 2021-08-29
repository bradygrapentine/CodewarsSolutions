function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) {
    return ""
  }
  let result = ""
  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i,i+sz).split('').map(n => Number(n))
    if (chunk.join('').length < sz) {
      continue
    }
    let isSumOfDigCubedDivBy2 = (chunk.reduce((tot,curr) => tot += Math.pow(curr, 3)) % 2) === 0
    result += isSumOfDigCubedDivBy2 ? chunk.reverse().join('') : chunk.slice(1).join('') + chunk[0].toString()
  }
  return result
}

// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
