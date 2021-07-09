function solution(input, markers) {
  const lines = input.split('\n')
  let result = []
  for (var i = 0; i < lines.length; i++) {
    let line = lines[i].split('')
    for (var j = 0; j < line.length; j++) {
      if (markers.includes(line[j])) {
        line = line.slice(0,j)
        break
      }
    }
    result.push(line.join('').trim())      
  }
  return result.join('\n')
}

// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/
