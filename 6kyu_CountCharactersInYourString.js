function count (string) {  
  let result = {}
  string.split('').forEach(function(letter) {
    (letter in result) ? result[letter] += 1 : result[letter] = 1
  })
  return result
}

// function count (string) {  
//   let result = {}
//   string.split('').forEach(function(letter) {
//     if (letter in result) {
//       result[letter] += 1
//     } 
//     else {
//       result[letter] = 1
//     }
//   })
//   return result
// }
