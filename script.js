const text = document.querySelector(".text")

window.addEventListener("mousemove", (e) => {
  let pageX = e.pageX
  let pageY = e.pageY

  let slowX = ((15 * pageX) / 570) + 40
  let slowY = ((15 * pageY) / 570) + 40
  
  text.style.backgroundPosition = `${slowX}%, ${slowY}%`

})