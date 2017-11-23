function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
  }, 1000)
}

function delayedFadeOut(div, range) {
  setTimeout(() => {
    fadeOut(div)
  }, Math.random() * range)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
  }, 1000)
}

function fadeAllOut(el) {
  const allOthers = Array.from(document.getElementsByClassName("fade-out-group"))
  allOthers.forEach(div => {
    console.log(div !== el);
    if (div !== el)
      delayedFadeOut(div, 250)
  })

  setTimeout(() => {
    fadeOut(el)
  }, Math.random()*(350) + 300)
}
