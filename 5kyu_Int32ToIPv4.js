function int32ToIp(int32){
  let binary = Number(int32).toString(2)
  if (binary == '0') {
    return '0.0.0.0'
  }
  let firstOct = parseInt(binary.slice(0,8), 2)
  let secondOct = parseInt(binary.slice(8,16), 2)
  let thirdOct = parseInt(binary.slice(16,24), 2)
  let fourthOct = parseInt(binary.slice(24,32), 2)
  return firstOct + '.' + secondOct + '.' + thirdOct + '.' + fourthOct
}

// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e
