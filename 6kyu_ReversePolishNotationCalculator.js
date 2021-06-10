function calc(expr) {
  let spltExpr = expr.split(' ')
  if (spltExpr.length <= 1) {
    return Number(expr) || 0
  } else {
    let result = null
    let numberStack = []
    for (var i = 0; i < spltExpr.length; i++) {
      let element = spltExpr[i]
      let operator = ''
      if (!(isNaN(element))) {
        numberStack.push(element)
      } else if (isNaN(element) && result === null) {
        operator = element
        let operand = Number(numberStack.pop())
        result = Number(numberStack.pop())
        switch (operator) {
          case "+":
            result += operand
            break
          case "-":
            result -= operand
            break  
          case "*":
            result *= operand
            break  
          case "/":
            result /= operand
            break          
        }
      } else if (isNaN(element)) {
        operator = element
        let operand = Number(numberStack.pop())
        switch (operator) {
          case "+":
            result += operand
            break
          case "-":
            result -= operand
            break  
          case "*":
            result *= operand
            break  
          case "/":
            result /= operand
            break          
        }
      } 
    }
    return result
  }
}
