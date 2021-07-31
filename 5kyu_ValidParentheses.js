function validParentheses(parens){
  let open = 0
  let closed = 0
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      open++
    } else if (parens[i] === ')') {
      open--
    }
    if (open < 0) {
      return false
    } 
  }
  if (open > 0) {
    return false
  }
  return true
}

// https://www.codewars.com/kata/52774a314c2333f0a7000688
