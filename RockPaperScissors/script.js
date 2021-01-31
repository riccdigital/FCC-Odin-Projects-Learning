window.onload = computerPlay()
const input = document.getElementById('player-input')
const output = document.getElementById('output')
const btn = document.getElementById ('btn')

const playerSelection = 0
function computerPlay () {
  const selection = ['rock', 'paper', 'scissors']
  const computerSelection = selection[Math.floor(Math.random() * selection.length)]
  console.log(computerSelection)
}
