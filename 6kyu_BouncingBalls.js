function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {return -1}
  let count = -1
  while (h > window) {
    h *= bounce
    count+=2
  }
  return count
}


// function bouncingBall(h,  bounce,  window) {
//   let count = 1
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     while (h > window) {
//       h *= bounce
//       if (h > window) {
//         count+=2
//       }
//       else if (h == window && count == 1) {
//         break
//       }
//       else if (h == window) {
//         count++
//       }
//     }
//     return count
//   }
//   else {
//     return -1
//   }
// }
