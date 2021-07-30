function score( dice ) {
  let scoreBoard = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  let score = 0
  
  dice.forEach(die => {
    scoreBoard[die]++
  })
  
  if (scoreBoard[6] > 2) {score += (Math.floor(scoreBoard[6]/3) * 600)}
  if (scoreBoard[4] > 2) {score += (Math.floor(scoreBoard[4]/3) * 400)}
  if (scoreBoard[3] > 2) {score += (Math.floor(scoreBoard[3]/3) * 300)}
  if (scoreBoard[2] > 2) {score += (Math.floor(scoreBoard[2]/3) * 200)}
  
  score += ((Math.floor(scoreBoard[1] / 3) * 1000) + ((scoreBoard[1] % 3) * 100))
  score += ((Math.floor(scoreBoard[5] / 3) * 500) + ((scoreBoard[5] % 3) * 50))
  
  return score
}

// https://www.codewars.com/kata/5270d0d18625160ada0000e4
