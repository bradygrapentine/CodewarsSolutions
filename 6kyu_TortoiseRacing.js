function race(v1, v2, g) {
  if (v1 > v2) return null
    
  let seconds = g / ((v2 - v1) / 3600)
  
  let hours = Math.floor(seconds/3600)
  
  let minutes = Math.floor((seconds - (3600*hours))/60)
  
  seconds = Math.floor(seconds - (3600*hours) - (minutes*60))
    
  return [hours, minutes, seconds]
}

// https://www.codewars.com/kata/55e2adece53b4cdcb900006c
