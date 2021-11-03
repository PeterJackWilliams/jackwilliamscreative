const imgclick = document.getElementById("imgclick")
const jackFirst = document.getElementById("jackfirst")
const jackSecond = document.getElementById("jacksecond")

imgclick.addEventListener("click", () => {
  jackFirst.classList.toggle("hide")
  jackSecond.classList.toggle("hide")
})

var i = 0;
var text = []
var time = 5000;

text[0] = document.getElementById("text1")
text[1] = document.getElementById("text2")
text[2] = document.getElementById("text3")

function changeText() {
  document.slide = text[i]

  if(i < text - 1) {
    ++i 
  } else {
    i = 0
  }

  setTimeout(changeText(), time)
}
    window.onload = changeText