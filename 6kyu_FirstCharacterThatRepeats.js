function firstDup (s) {
  let counts = {}
  let result = ['', s.length]
  for (let i = 0; i< s.length; i++) {
    if (counts.hasOwnProperty(s[i])) {
      if (result[1] > counts[`${s[i]}`]) {
        result[0] = s[i]
        result[1] = counts[`${s[i]}`]
      }
    } else {
      counts[`${s[i]}`] = i
    }
  }
  return result[0] == '' ? undefined: result[0]
}

// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb
