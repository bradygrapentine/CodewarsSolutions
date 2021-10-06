function order(words) {
  return words.split(' ').sort((a,b) => a.match(/[0-9]/)-b.match(/[0-9]/)).join(' ')
}

// function order(words){
//   if (words === "") return "" 
//   const regex = /[0-9]/;
//   let wordArray = words.split(' ')
//   let result = []
//   for (var i = 0; i < wordArray.length; i++) {
//     let newIndex = Number(wordArray[i].match(regex));
//     result[newIndex-1] = wordArray[i]
//   }
//   return result.join(' ')
// }

// https://www.codewars.com/kata/55c45be3b2079eccff00010f
