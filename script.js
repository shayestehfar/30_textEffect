const textEl = document.querySelector('.text')
const speedEl = document.querySelector('#speed')

let idx = 1
let speed = 300
const text = 'The page is loading ...'

writeText()
function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length) {
    idx = 1
  }
  setTimeout(writeText, speed)
}
speedEl.addEventListener('change', () => {
  speed = 300 / speedEl.value
})
