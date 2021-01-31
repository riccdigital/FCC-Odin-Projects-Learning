window.onload = computerPlay()

function computerPlay () {
  const selection = ['rock', 'paper', 'scissors']
  const computerSelection = selection[Math.floor(Math.random() * selection.length)]
  console.log(computerSelection)
}
