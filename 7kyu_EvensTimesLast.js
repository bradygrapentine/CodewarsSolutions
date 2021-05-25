function evenLast(numbers) {
  let total = 0
  if (numbers.length === 0) {return 0} 
  for (var i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {total += numbers[i]}
  }
  return total * numbers[numbers.length - 1]
}

// const evenLast = n => n.reduce((sum, val, i) => ((i % 2 == 0) ? sum += val: sum), 0) * n[n.length -1] || 0
