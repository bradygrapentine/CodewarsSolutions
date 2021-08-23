function solution(string) {
  let spltStr = string.split('')
   for (let i = 0; i < spltStr.length; i++) {
     if (spltStr[i].charCodeAt(0) < 91 && spltStr[i].charCodeAt(0) > 64) {
       spltStr.splice(i, 0, ' ')
       i++
     }
   }
  return spltStr.join('')
}

// https://www.codewars.com/kata/5208f99aee097e6552000148 
