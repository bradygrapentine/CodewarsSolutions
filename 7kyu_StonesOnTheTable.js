function solve(stones) {
  return stones.split('').reduce((count, curr, index, spltStones) => count += spltStones[index-1] == curr ? 1 : 0, 0)
}

// function solve(stones) {
//   let numStonesToRemove = 0
//   for (let i = 1; i < stones.length; i++) {
//     if (stones[i-1] == stones[i]) {
//       numStonesToRemove++
//     }
//   }
//   return numStonesToRemove
// }

// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a
