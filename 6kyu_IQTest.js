function iqTest(numbers) {
  const numArray = numbers.split(' ').map(num => Number(num))
  console.log(numArray[0])
  let evens = []
  let odds = []
  for (let i = 0; i < numArray.length; i++) {
    if(numArray[i] % 2 === 1) {
      odds.push(i) 
    } else {
      evens.push(i)
    }
  }
  if (odds.length === 1) {
     return odds[0] + 1
  }
  return evens[0] + 1
}

// https://www.codewars.com/kata/552c028c030765286c00007d
