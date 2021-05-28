function zeros (n) {
  let kMax = Math.floor(Math.log(n) / Math.log(5))
  let k = 1
  let result = 0
  while( k <= kMax) {
    result += Math.floor(n/5**k)
    k++
  }
  return result
}
