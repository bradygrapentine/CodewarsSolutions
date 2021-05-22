function tribonacci(signature,n){
  let result = new Array(n)
  result[0] = signature[0]
  result[1] = signature[1]
  result[2] = signature[2]
  for (let i = 3; i < result.length; i++){
    result[i] = result[i-1] + result[i-2] + result[i-3]
  }
  return result.slice(0,n)
}
