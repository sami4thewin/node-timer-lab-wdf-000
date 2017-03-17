// process.argv.shift()
// process.argv.shift()
// string = process.argv[0]
//
// function bro(string) {
//   if (string.includes('s')) {
//     num = parseInt(process.argv, 10) - 1
//     console.log(`Left: ${num}s`)
//   } else {
//     console.log('Left: 59s')
//   }
// }
//
// bro(string)


var timeLeft = 0
var argv = process.argv
if (!argv[2]) {
  console.log('Please provide an argument, e.g., 5s or 1min.')
  process.exit(1)
} else if (argv[2].indexOf('s')>-1) {
  timeLeft = parseInt(argv[2].slice(0, -1), 10)
} else if (argv[2].indexOf('min')>-1) {
  timeLeft = parseInt(argv[2].slice(0, -3), 10) * 60
} else {
  console.log('Please provide a valid argument, e.g., 5s or 1min.')
  process.exit(1)
}

var interval = setInterval(()=>{
  timeLeft --
  console.log(`Left: ${timeLeft}s`)
  if (timeLeft == 0) {
    clearInterval(interval)
    process.exit(0)
  }
}, 1000)
