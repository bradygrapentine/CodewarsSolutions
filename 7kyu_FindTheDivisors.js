function divisors(integer) {
  let divisors =[];
  let max = integer/2+1;
  for (let i = 2; i <= max - 1; i++) {
    if (integer % i == 0) {
      divisors.push(i);
    }
  }
  if(divisors.length === 0) {
    return integer + " is prime";
  } else {
    return divisors.sort((a,b) => a-b);
  }
};

// https://www.codewars.com/kata/544aed4c4a30184e960010f4
