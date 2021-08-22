function incrementString (strng) {
  let number = 1
  for (let i = 0; i < strng.length; i++) {
    if (strng[i].charCodeAt() > 47 && strng[i].charCodeAt() < 58 ) {
      let numberAsString = strng.slice(i, strng.length)
      number += Number(numberAsString) 
      return strng.slice(0, i) + number.toString().padStart(numberAsString.length,'0')
    }
  }
  return strng + number.toString()
}

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c
