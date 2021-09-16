function christmasTree(height) {
  let length = (height * 2) - 1
  let star = '*'
  let result = ''
  for (let i = 1; i <= length; i+=2) {
    if (i !== 1) {
      result += '\n'
    }
    let line = star.repeat(i)
    line = line.padStart((length - i)/2 + i)
    line = line.padEnd(length)
    result += line
  }
  return result
}

// https://www.codewars.com/kata/52755006cc238fcae70000ed
