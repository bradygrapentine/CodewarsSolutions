// Refactored:
function dataReverse(data) {
  let result = []
  for (var i = data.length - 1; i >= 0; i -= 8) {
    result.push(...data.slice((i-7), i+1))
  }
  return result
}

// function dataReverse(data) {
//   let result = []
//   for (var i = data.length - 1; i >= 0; i -= 8) {
//     let item = data.slice((i - 7) , i + 1)
//     for (var j = 0; j < item.length; j++) {
//       result.push(item[j])
//     }
//   }
//   return result
// }

// https://www.codewars.com/kata/569d488d61b812a0f7000015/
