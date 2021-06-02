function find01(arr){
  let count = 0
  for(let i = 1; i < arr.length-1; i++) {
    for(let j = 1; j < arr[i].length-1; j++) {
      let value = arr[i][j]
      arr[i + 1][j] != value && arr[i - 1][j] != value && arr[i][j + 1] != value && arr[i][j - 1] != value ? count++: {}
    }
  }
  return count;
}



// function find01(arr){  
//   let count = 0;
//   for(let i = 1; i < arr.length-1; i++) {
//     for(let j = 1; j < arr[i].length-1; j++) { 
//       if (arr[i][j] == 0) {
//         if(arr[(i + 1)][j] == 1 && arr[(i - 1)][j] == 1 && arr[i][(j + 1)] == 1 && arr[i][(j - 1)] == 1) {
//           count++;
//         }
//       }
//       else {
//         if(arr[(i + 1)][j] == 0 && arr[(i - 1)][j] == 0 && arr[i][(j + 1)] == 0 && arr[i][(j - 1)] == 0) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }
