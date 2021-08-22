function toCamelCase(str){
  let spltStr = str.split(/-|_/)
  for (let i = 1; i < spltStr.length; i++) {
    spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1).toLowerCase()
  }
  return spltStr.join('')
}

// https://www.codewars.com/kata/517abf86da9663f1d2000003
