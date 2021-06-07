function findOutlier(integers) {
  const even_s = integers.filter(integ => integ % 2 === 0)
  const odd_s = integers.filter(integ => (integ % 2 === 1 || integ % 2 === -1))
  const result = (even_s.length === 1) ? even_s[0]: odd_s[0]
  return result
}
