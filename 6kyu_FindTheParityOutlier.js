// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/javascript

function findOutlier(integers){
  return (integers[0] % 2 !== 0 && integers[1] % 2 === 0 && integers[2] % 2 === 0) || 
    (integers[0] % 2 === 0 && integers[1] % 2 !== 0 && integers[2] % 2 === 0) || 
    (integers[0] % 2 === 0 && integers[1] % 2 === 0 && integers[2] % 2 !== 0) || 
    (integers[0] % 2 === 0 && integers[1] % 2 === 0 && integers[2] % 2 === 0) 
    ? integers.filter(integ => integ % 2 !== 0).pop() : integers.filter(integ => integ % 2 === 0).pop()
}

// function findOutlier(integers) {
//   const even_s = integers.filter(integ => integ % 2 === 0)
//   const odd_s = integers.filter(integ => (integ % 2 === 1 || integ % 2 === -1))
//   const result = (even_s.length === 1) ? even_s[0]: odd_s[0]
//   return result
// }
