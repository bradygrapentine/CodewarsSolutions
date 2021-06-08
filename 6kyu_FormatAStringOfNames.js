function list(names){
  let result = ""
  names.length === 1 ? result = `${names[0].name}`:{}
  names.length === 2 ? result = `${names[names.length-2].name} & ${names[names.length-1].name}`:{}
  if (names.length > 2) {
    for (i = 0; i < names.length - 2; i++) {
      result += `${names[i].name}, `
    }
    result += `${names[names.length-2].name} & ${names[names.length-1].name}`
  }
  return result
}
