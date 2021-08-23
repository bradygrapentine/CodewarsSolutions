Math.round = function(number) {
  return number - parseInt(number) >= 0.5 ? parseInt(number) + 1 : parseInt(number); // TODO: fix this
};

Math.ceil = function(number) {
  return parseInt(number) === number ? parseInt(number) : parseInt(number) + 1; // TODO: fix this
};

Math.floor = function(number) {
  return parseInt(number); // TODO: fix this
};

// https://www.codewars.com/kata/5267faf57526ea542e0007fb
