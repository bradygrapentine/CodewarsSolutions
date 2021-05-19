// Set up placeholder var's to hold our first, second, and third product string
// Set up placeholders for each product total
// For loop to find the first highest priced product
// For loop to find the second highest priced product
// For loop to find the second highest priced product

function top3(products, amounts, prices) {  
  let first = ''
  let second = ''
  let third = ''
  
  let total1 = 0
  let total2 = 0
  let total3 = 0
  
  for (let i = prices.length - 1; i >= 0; i--) {
    if (amounts[i] * prices[i] >= total1) {
      total1 = amounts[i] * prices[i]
      first = products[i]
    }
  }
    for (let i = prices.length - 1; i >= 0; i--) {
      if (amounts[i] * prices[i] >= total2 && products[i] != first) {
        total2 = amounts[i] * prices[i]
        second = products[i]
      }
    }
    for (let i = prices.length - 1; i >= 0; i--) {
      if (amounts[i] * prices[i] >= total3  && products[i] != first  && products[i] != second) {
        total3 = amounts[i] * prices[i]
        third = products[i]
      }
    }
    let answer = [first, second, third]
    return answer 
}



// function top3(prdcts, amts, prcs) {
//   return prdcts.
//            map((id, i) => ({ id, i, rev: amts[i] * prcs[i] })).
//            // compare function used         
//            sort((a,b) => (a.rev === b.rev) ? a.i - b.i : b.rev - a.rev).
//            // if a revenue is equal to b revenue, sort the objects in ascending order according 
//            // to their index
//            //
//            // else, sort the objects in descending order according to their revenue
//            slice(0,3).
//            map(prdct => prdct.id);
// }
