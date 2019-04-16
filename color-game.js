let colors = generateRandomColors(6)

//Ui Elements
let pickColor = document.querySelector(".pickColor")
let square = document.querySelectorAll(".square")
let message = document.querySelector(".message")
let replayBtn = document.querySelector(".replayBtn")
let container = document.querySelector(".container")
let colorDisplay = document.querySelector(".colorDisplay")

// Variable Needed
let winningColor = colors[pickRandomColor()]

colorDisplay.textContent = winningColor

for (let i = 0; i < square.length; i++) {
  square[i].style.background = colors[i]
  square[i].addEventListener("click", function () {
    if (square[i].style.background !== winningColor) {
      square[i].style.background = "white";
      message.textContent = "Try Again"
    } else {
      winFunc()
    }
  })
}

function winFunc() {
  square.forEach((square) => {
    square.style.background = winningColor
    message.textContent = "Correct!"
    replayBtn.textContent = "Play Again"
    container.style.background = winningColor;
  })
}
// Play Again Function

replayBtn.addEventListener("click", function () {
  colors = generateRandomColors(6)
  winningColor = colors[pickRandomColor()]

  for (let i = 0; i < square.length; i++) {
    square[i].style.background = colors[i]
    square[i].addEventListener("click", function () {
      if (square[i].style.background !== winningColor) {
        square[i].style.background = "white";
        message.textContent = "Try Again"
      } else {
        winFunc()
      }
    })
  }
  colorDisplay.textContent = winningColor
  container.style.background = "skyblue"
  message.textContent = "";

})



// Random Color Functions
function randomColor() {
  let r = Math.floor(Math.random() * 226)
  let g = Math.floor(Math.random() * 226)
  let b = Math.floor(Math.random() * 226)
  return `rgb(${r}, ${g}, ${b})`
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr
}

function pickRandomColor() {
  return Math.floor(Math.random() * colors.length)
}