function digPow(n, p){
  let nAsSpltStr = n.toString().split('')
  let result = 0
  for (let i = 0; i < nAsSpltStr.length; i++) {
    result += Math.pow(Number(nAsSpltStr[i]), p)
    p++
  }
  return result % n === 0 ? result/n : -1 
}

// https://www.codewars.com/kata/5552101f47fc5178b1000050
