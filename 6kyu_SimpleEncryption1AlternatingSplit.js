function encrypt(text, n) {
  let count = 0
  if (text === null) {
    return null
  } else if (text === "") {
    return ""
  }
  while (count < n) {
    text = text.split('').filter((c, i) => i % 2 === 1).join('') + text.split('').filter((c, i) => i % 2 === 0).join('')
    count++
  }
  return text
}

function decrypt(encryptedText, n) {
  let count = 0
  if (encryptedText === null) {
    return null
  } else if (encryptedText === "") {
    return ""
  }
  let frontLastIndex = encryptedText.length % 2 == 0 ? Math.ceil(encryptedText.length / 2) : Math.ceil(encryptedText.length / 2) - 1 
  let decryptedText = encryptedText
  while (count < n) {
    let front = decryptedText.slice(0,frontLastIndex)
    let back = decryptedText.slice(frontLastIndex, encryptedText.length)
    decryptedText = ""
    for (var i = 0; i < Math.ceil(encryptedText.length / 2); i++) {
      if (front[i] != null) {
        decryptedText += (back[i] + front[i])
      }
    }
    decryptedText = encryptedText.length % 2 == 0 ? decryptedText : decryptedText + back[back.length-1]
    count++
  }
  return n === 0 ? encryptedText : decryptedText
}

// https://www.codewars.com/kata/57814d79a56c88e3e0000786
