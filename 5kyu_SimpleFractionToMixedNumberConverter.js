function mixedFraction(s){
  let sAsArr = s.split('/')
  
  let num = Number(sAsArr[0])
  
  let denom = Number(sAsArr[1])
  
  let rem = num % denom
  
  let quotient = (num > 0 && denom > 0) || (num < 0 && denom < 0) ? (Math.floor(num / denom)) : (Math.ceil(num / denom))

  // ------------------------------------------------- //

  if (quotient === Infinity || quotient === -Infinity) {
    throw new Error('ZeroDivisionError')
  } 
  else if (num === 0 && denom === 0) {
    throw new Error('ZeroDivisionError')
  }
  
  // ------------------------------------------------- //
  
  function gcd(a,b){
    return b ? gcd(b, a%b) : a
  }
  
  let gcdResult = gcd(num,denom)
  
  // ------------------------------------------------- //
  
  let result = rem === 0 ? quotient.toString() 
                          : quotient === 0 ? Math.abs(num/gcdResult).toString() + '/' + Math.abs(denom/gcdResult).toString() 
                          : quotient.toString() + ' ' + Math.abs(rem/gcdResult).toString() + '/' + Math.abs(denom/gcdResult).toString()
  
  result = (((num < 0 && denom > 0) || (denom < 0 && num > 0)) && quotient === 0) ? '-' + result: result
  
  return result
}

// https://www.codewars.com/kata/556b85b433fb5e899200003f

