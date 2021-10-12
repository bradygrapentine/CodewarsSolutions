function race(v1, v2, g) {
  if (v1 > v2) return null
  let d1 = g
  let d2 = 0
  
  let seconds = g / ((v2 - v1)/3600)
  
  let hours = Math.floor(seconds/3600); 
	
	let minutes = Math.floor((seconds - (3600*hours))/60);
	
	seconds = seconds - (3600*hours) - (minutes*60);
    
  return [hours, minutes, Math.floor(seconds)]
}

// https://www.codewars.com/kata/55e2adece53b4cdcb900006c
