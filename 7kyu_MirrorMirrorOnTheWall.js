function mirror(data) {
  let sortOrig = data.slice(0).sort((a,b) => a-b)
  return sortOrig.concat(sortOrig.slice(0,sortOrig.length - 1).reverse())
}

// function mirror(data) {
//   let sortOrig = data.slice(0).sort((a,b) => a-b)
//   let reversedOrigMinusLast = sortOrig.slice(0,sortOrig.length - 1)
//   let result = sortOrig.concat(reversedOrigMinusLast.reverse())
//   return result
// }
