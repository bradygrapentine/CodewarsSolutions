function humanReadable(seconds) {
  const hrs = (Math.floor(seconds/3600)).toString()
  const mins = (Math.floor((seconds - (hrs*3600))/60)).toString()
  const secs = (seconds - (mins * 60) - (hrs * 3600)).toString()
  return `${hrs.padStart(2, '0')}:${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`
}

// function humanReadable(seconds) {
//   const hrs = Math.floor(seconds/3600)
//   const mins = Math.floor((seconds - (hrs*3600))/60)
//   const secs = seconds - (mins * 60) - (hrs * 3600)
//   return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
// }
