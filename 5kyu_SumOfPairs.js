function sumPairs(ints, s) {
  let hash = Object.create(null)
  // initialize hash table to keep track of integers as input array is iterated over
  for (let i = 0; i < ints.length; i++) {
    // Loop through the integers from the beginning of the array with its original order
    let a = ints[i]
    if ((s - a) in hash) {
      // if the value of the input target minus the current integer is already in the hash table,
      // return the target value minus the current value (which we now know exists at an earlier index
      // in the input array) and the current value
      return [s - a, a]
    }
    if (!(a in hash)) {
      hash[a] = "integer encountered in array and recorded as key in hash table"
      // if the value of the current element is not part of the hash table, add it
    }
  }
}

// By keeping track of what we've seen as we've traversed the array from left to right 
// and leveraging the time-complexity (O(N^2) vs. O(N)) advantage of key lookup via the 
// 'in' operator, we can check every value to determine whether a value we've already traversed 
// plus the current value for a given iteration equals the target value. 

// The first instance of a pair sum is the same as the instance with the lowest right index, and
// this algorithm looks for exactly that more elegantly than my initial, brute-force implementation. 



// function sumPairs(ints, s) {
//   let result = []
//   for (var i = 0; i < ints.length; i++) {
//     for (var j = 0; j < ints.length; j++) {
//       if ((ints[i] + ints[j]) === s && i !== j) {
//         result.push([ints[j], ints[i], j, i])
//       }
//     }
//   }
//   result.sort((a,b) => Math.abs(a[3] - a[2]) - Math.abs(b[3] - b[2]))
//   try {
//     return [result[0][1], result[0][0]]
//   } catch {
//     return undefined
//   }
// }

// https://www.codewars.com/kata/54d81488b981293527000c8f
