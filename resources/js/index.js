const imgclick = document.getElementById("imgclick")
const jackFirst = document.getElementById("jackfirst")
const jackSecond = document.getElementById("jacksecond")

imgclick.addEventListener("click", () => {
  jackFirst.classList.toggle("hide")
  jackSecond.classList.toggle("hide")
})