function generateHashtag (str) {
  if (str.replace(/\s/g, '').length == 0 || str.length == 0) {
    return false
  }
  let newStr = str.split(/\s+/).map(c => c[0].toUpperCase() + c.slice(1)).join('')
  return ('#' + newStr).trim().length > 140 ? false : ('#' + newStr).trim() 
}

// https://www.codewars.com/kata/52449b062fb80683ec000024
