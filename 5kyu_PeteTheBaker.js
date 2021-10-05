function cakes(recipe, available) {
  let count = null 
  const requiredIngreds = Object.keys(recipe)
  for (let i = 0; i < requiredIngreds.length; i++) {
    let ingred = requiredIngreds[i]
    if (!available.hasOwnProperty(ingred)) {
      return 0
    } else {
      let countByIngred = Math.floor(available[ingred] / recipe[ingred])
      count = count === null ? countByIngred : count < countByIngred ? count : countByIngred
    }
  }
  return count
}

// https://www.codewars.com/kata/525c65e51bf619685c000059
