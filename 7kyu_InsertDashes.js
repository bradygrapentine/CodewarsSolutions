function insertDash(num) {
  return num.toString().split('').map((dig, i, num) => (dig % 2 == 1 && num[i+1] % 2 == 1) ? `${dig}-`: dig).join('')
}
