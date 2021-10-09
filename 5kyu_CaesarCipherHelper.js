class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }
  encode(string) {
    string = string.toUpperCase()
    let result = ""
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[A-Z]/)) {
        let val = (string.charCodeAt(i) - 64 + this.shift) % 26
        let newAsciiVal = val === 0 ? 90: 64 + val
        result += String.fromCharCode(newAsciiVal)
      } else {
        result += string[i]
      }
    }
    return result;
  }
  decode(string) {
    string = string.toUpperCase()
    let result = ""
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[A-Z]/)) {
        let val = string.charCodeAt(i) - 64 - this.shift
        let newAsciiVal = val > 0 ? string.charCodeAt(i) - this.shift : 90 + val
        result += String.fromCharCode(newAsciiVal)
      } else {
        result += string[i]
      }
    }
    return result;
  }
}

// https://www.codewars.com/kata/526d42b6526963598d0004db
