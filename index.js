/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // You're solution here
  fadeOut(div)
}

function delayedFadeIn(div, range) {
  // You're solution here
  fadeIn(div)
}

function fadeAllOut(el, group) {
  // You're solution here
  group.forEach(div => {
    delayedFadeOut(div)
  })
}

function fadeAllIn(group) {
  // You're solution here
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
