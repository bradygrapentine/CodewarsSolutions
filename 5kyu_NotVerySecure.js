function alphanumeric(string){
  return /^[a-z|0-9]+$/i.test(string)
}

// function alphanumeric(string){
//   return /^[A-Z|a-z|0-9]+$/.test(string)
// }

// function alphanumeric(string){
//   if (string == "") return false
//   const pattern = new RegExp('^[A-Z|a-z|0-9]+$')
//   return pattern.test(string)
// }

// https://www.codewars.com/kata/526dbd6c8c0eb53254000110
