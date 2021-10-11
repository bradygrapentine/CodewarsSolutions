function parse( data )
{
  let value = 0
  let result = []
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      value++
    } else if (data[i] === 'd') {
      value--
    } else if (data[i] === 's') {
      value = value**2
    } else if (data[i] === 'o') {
      result.push(value)
    }
  }
  return result
}

// https://www.codewars.com/kata/51e0007c1f9378fa810002a9
