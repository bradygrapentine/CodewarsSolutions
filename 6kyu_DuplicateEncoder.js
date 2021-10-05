function duplicateEncode(word){
  let result = ""
  word = word.toLowerCase()
  for (var i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      result += '('
    } else {
      result += ')'
    }
  }
  return result
}

// function duplicateEncode(word){
//   let result = ""
//   word = word.toLowerCase()
//   let counts = {}
//   for (var i = 0; i < word.length; i++) {
//     if (counts[word[i]] === undefined) {
//       counts[word[i]] = 1
//     } else {
//       counts[word[i]] += 1
//     }
//   }
//   for (var i = 0; i < word.length; i++) {
//     result = counts[word[i]] > 1 ? result += ')' : result += '('
//   }
//   return result
// }

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
