function longestConsec(strarr, k) {
  if (k <= 0) return ""
  let longest = ""
  for (let i = 0; i <= strarr.length-k; i++) {
    longest = strarr.slice(i,i+k).join('').length > longest.length ? strarr.slice(i,i+k).join('') : longest
  }
  return longest
}

// function longestConsec(strarr, k) {
//   if ((strarr.length === 0 || strarr === null) || k > strarr.length || k <= 0) { 
//     return ""
//   }
//   let longest = ""
//   for (let i = 0; i <= strarr.length-k; i++) {
//     longest = strarr.slice(i,i+k).join('').length > longest.length ? strarr.slice(i,i+k).join('') : longest
//   }
//   return longest
// }

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
