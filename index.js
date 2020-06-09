// Your code here
let moveDodgerLeft = () => {
  let dodger = document.getElementById("dodger")
  let leftPosition = parseInt(dodger.style.left.replace("px", ""))
  if(leftPosition > 0) {
    dodger.style.left = `${leftPosition - 4}px`
  }
}

let moveDodgerRight = () => {
  let dodger = document.getElementById("dodger")
  let leftPosition = parseInt(dodger.style.left.replace("px", ""))
  if(leftPosition <= 360) {
    dodger.style.left = `${leftPosition + 4}px`
  }
}
