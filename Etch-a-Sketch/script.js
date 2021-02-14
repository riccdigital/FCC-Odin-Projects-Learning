document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('main-container')
  const body = document.querySelector('body')
  const ROWS = 16
  const COLUMNS = 16
  const squares = []

  // Button
  const button = document.createElement('button')
  body.appendChild(button)
  button.innerHTML = 'RESET'
  button.style.backgroundColor = 'yellow'
  button.style.fontSize = '18px'

  // Create Squares
  const createSquare = () => {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLUMNS; j++) {
        const div = document.createElement('div')
        div.setAttribute('class', 'square')
        div.innerHTML = ''
        container.appendChild(div)
        squares.push(div)
      }
    }
  }
  createSquare()

  // Random Colors On Hover
  const cells = document.querySelectorAll('.square')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', () => {
      const hoverColors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple']
      const randomness = Math.floor(Math.random() * 7)
      cells[i].style.backgroundColor = hoverColors[randomness]
    })
    const reset = () => {
      cells[i].style.backgroundColor = null
    }
    // button function
    button.addEventListener('click', () => {
      reset()
    })
  }
  // Reset Function
})
