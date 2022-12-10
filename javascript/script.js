let btn = document.querySelector(".button")
let menu = document.querySelector(".menu")

btn.addEventListener("click", ()=>{
  menu.classList.toggle("show")
  btn.classList.toggle("open")
})