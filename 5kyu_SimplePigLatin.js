function pigIt(str){
  let result = str.split(' ').map(word => {
    let wordAsArr = word.split('')
    wordAsArr.splice(0,1)
    let element = (word === "!" || word === "?" || word === ".") ? 
        word : wordAsArr.join('') + word[0] + "ay"
    return element
  })
  return result.join(' ')
}

// function pigIt(str){
//   let result = str.split(' ').map((word, index) => {
//     let ending = word[0] + "ay"
//     if(word.charCodeAt() === 63 || word.charCodeAt() === 46 || word.charCodeAt() === 33) {
//       return word;
//     }
//     else {
//       let wordAsArr = word.split('')
//       wordAsArr.splice(0,1)
//       return wordAsArr.join('') + ending
//     }
//   }).join(' ')
//   return result
// }
