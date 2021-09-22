function validate(password) {
  console.log(password)
  return /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9])^[a-zA-Z0-9]{6,}$/.test(password)
}

// https://www.codewars.com/kata/52e1476c8147a7547a000811
