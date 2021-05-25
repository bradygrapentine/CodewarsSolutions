function narcissistic(num) {
  return num.toString().split('').reduce((result, dig) => result + (Number(dig) ** num.toString().length), 0) === num
}

// const narcissistic = num => num.toString().split('').reduce((result, dig) => result + (Number(dig) ** num.toString().length), 0) === num
