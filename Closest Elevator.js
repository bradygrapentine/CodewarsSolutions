function elevator(left, right, call){
  const leftDiff = Math.abs(left - call)
  const rightDiff = Math.abs(right - call)
  if (leftDiff < rightDiff){
    return "left"
  }
  return "right"
}
