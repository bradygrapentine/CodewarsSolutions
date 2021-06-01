function decode(string) {
  let strAsArr = string.split('')
  for (var i = 0; i < strAsArr.length; i++) {
    if (strAsArr[i] == '5') {strAsArr[i]  = '0'}
    else if (strAsArr[i]  == '0') {strAsArr[i]  = '5'}
    else {strAsArr[i] = 10 - strAsArr[i]}
  }
  return strAsArr.join('')
}

// function decode(string) {
//   let strAsArr = string.split('')
//   let result = []
//   strAsArr.map(num => {
//     switch(num) {
//         case '1':
//         num = '9'
//         result.push(num)
//         break
//         case '2':
//         num = '8'
//         result.push(num)
//         break
//         case '3':
//         num = '7'
//         result.push(num)
//         break
//         case '4':
//         num = '6'
//         result.push(num)
//         break
//         case '6':
//         num = '4'
//         result.push(num)
//         break
//         case '7':
//         num = '3'
//         result.push(num)
//         break
//         case '8':
//         num = '2'
//         result.push(num)
//         break
//         case '9':
//         num = '1'
//         result.push(num)
//         break
//         case '5':
//         num = '0'
//         result.push(num)
//         break
//         case '0':
//         num = '5'
//         result.push(num)
//         break
//     }
//   })
//   return result.join('')
// }
