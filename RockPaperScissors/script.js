/* window.onload = computerPlay() */

const output = document.getElementById('output')
/* button */
const btn = document.getElementById('btn')
btn.style.cursor = 'pointer'
btn.addEventListener('click', clickHandler, false)

function clickHandler () {
  computerPlay()
}

function computerPlay () {
  const selection = ['rock', 'paper', 'scissors']
  const computerSelection = selection[Math.floor(Math.random() * selection.length)]
  const playerSelection = document.getElementById('player-input').value

  if (computerSelection === 'rock') {
    if (playerSelection.toLowerCase() === 'rock') {
      output.innerHTML = 'Computer also chose Rock, Play Again'
    } else if (playerSelection.toLowerCase() === 'paper') {
      output.innerHTML = 'Computer chose Rock, You Win'
    } else if (playerSelection.toLowerCase() === 'scissors') {
      output.innerHTML = 'Computer also chose Rock, Lose'
    } else {
      output.innerHTML = 'Please make a valid choice'
    }
  } else if (computerSelection === 'paper') {
    if (playerSelection.toLowerCase() === 'paper') {
      output.innerHTML = 'Computer also chose Paper, Play Again'
    } else if (playerSelection.toLowerCase() === 'scissors') {
      output.innerHTML = 'Computer chose Paper, You Win'
    } else if (playerSelection.toLowerCase() === 'rock') {
      output.innerHTML = 'Computer chose Paper, You Lose'
    } else {
      output.innerHTML = 'Please make a valid choice'
    }
  } else {
    if (playerSelection.toLowerCase() === 'scissors') {
      output.innerHTML = 'Computer also chose Scissors, Play Again'
    } else if (playerSelection.toLowerCase() === 'rock') {
      output.innerHTML = 'Computer chose Scissors, You Win'
    } else if (playerSelection.toLowerCase() === 'paper') {
      output.innerHTML = 'Computer chose Scissors, You Lose'
    } else {
      output.innerHTML = 'Please make a valid choice'
    }
  }
}
