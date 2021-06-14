// https://www.codewars.com/kata/582e0e592029ea10530009ce/solutions/javascript

function duckDuckGoose(players, goose) {
  while (goose > players.length) {
    goose -= players.length
  }
  return players[goose - 1].name
}

//   return players[(goose-1)%players.length].name
