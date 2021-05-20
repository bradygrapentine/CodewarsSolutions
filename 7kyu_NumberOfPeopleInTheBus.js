var number = function(busStops){
  let off = 0
  let on = 0
  busStops.forEach(function(busStop) {
    on += busStop[0]
    off += busStop[1]
  })
  return on-off
}
