// Your code here
const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4"

const moveDodgerLeft = () => {
  const leftString = dodger.style.left.replace('px', '')
  const left = parseInt(leftString, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

const moveDodgerRight = () => {
  const leftString = dodger.style.left.replace('px', '')
  const left = parseInt(leftString, 10)

  if (left < 360) {
      dodger.style.left = `${left + 1}px`
  }
}

const moveDodgerUp = () => {
  const bottomString = dodger.style.bottom.replace('px', '')
  const bottom = parseInt(bottomString, 10)

  if (bottom < 380) {
      dodger.style.bottom = `${bottom + 1}px`
  }
}

const moveDodgerDown = () => {
  const bottomString = dodger.style.bottom.replace('px', '')
  const bottom = parseInt(bottomString, 10)

  if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft()
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight()
  } else if (e.key === 'ArrowUp') {
    moveDodgerUp()
  } else if (e.key === 'ArrowDown') {
    moveDodgerDown()
  }
})