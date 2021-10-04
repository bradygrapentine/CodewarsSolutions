function validPhoneNumber(phoneNumber){
  const regex = new RegExp('^[\(0-9\)]{5} [0-9]{3}[-0-9]{5}$')
  return regex.test(phoneNumber)
}

// https://www.codewars.com/kata/525f47c79f2f25a4db000025
