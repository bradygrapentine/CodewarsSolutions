function titleCase(title, minorWords) {
  if (title == '') {
    return title
  }
  const listOfMinorWords = minorWords === undefined ? [] : minorWords.split(' ').map(wrd => wrd.toLowerCase())
  let titleList = title.split(' ')
  titleList[0] = titleList[0][0].toUpperCase() + titleList[0].slice(1).toLowerCase()
  for (var i = 1; i < titleList.length; i++) {
    if (listOfMinorWords.includes(titleList[i].toLowerCase())) {
      titleList[i] = titleList[i].toLowerCase()
    } else {
      titleList[i] = titleList[i][0].toUpperCase() + titleList[i].slice(1).toLowerCase()
    }
  }
  return titleList.join(' ')
}

// https://www.codewars.com/kata/5202ef17a402dd033c000009
