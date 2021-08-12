function presses(phrase) {
  let count = 0
  phrase = phrase.toLowerCase()
  for (var i = 0; i < phrase.length; i++) {
    let charCodeCurrent = phrase[i].charCodeAt(0)
    if (phrase[i] == '1' || phrase[i] == '*' || phrase[i] == '#' || phrase[i] == ' ') {
      count++
    } else if (phrase[i] == '0') {
      count+=2
    } else if (phrase[i] == '9' || phrase[i] == '7') {
      count+=5
    } else if (Number(phrase[i]) < 9 || Number(phrase[i]) > 1) {
      count+=4
    } else {
      if (charCodeCurrent < 100 && charCodeCurrent > 96) {
        count+= (charCodeCurrent - 96)
      } else if (charCodeCurrent < 103 && charCodeCurrent > 99) {
        count+= (charCodeCurrent - 99)
      } else if (charCodeCurrent < 106 && charCodeCurrent > 102) {
        count+= (charCodeCurrent - 102)
      } else if (charCodeCurrent < 109 && charCodeCurrent > 105) {
        count+= (charCodeCurrent - 105)
      } else if (charCodeCurrent < 112 && charCodeCurrent > 108) {
        count+= (charCodeCurrent - 108)
      } else if (charCodeCurrent < 116 && charCodeCurrent > 111) {
        count+= (charCodeCurrent - 111)
      } else if (charCodeCurrent < 119 && charCodeCurrent > 115) {
        count+= (charCodeCurrent - 115)
      } else if (charCodeCurrent < 123 && charCodeCurrent > 118) {
        count+= (charCodeCurrent - 118)
      } 
    }
  }
  return count
}

// https://www.codewars.com/kata/54a2e93b22d236498400134b
