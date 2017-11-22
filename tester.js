// poop

function fadeOut(el) {
  const elRef = el
  elRef.classList.add("fade-up-out")
  setTimeout(() => {
    elRef.style.opacity = 0
    elRef.classList.remove("fade-up-out")
  }, 1000)
}

function fadeIn(el) {
  const elRef = el
  elRef.classList.add("fade-down-in")
  setTimeout(() => {
    elRef.style.opacity = 1
    elRef.classList.remove("fade-down-in")
  }, 1000)
}
