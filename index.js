function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, 1000)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, 1000)
}

function delayedFadeOut(div, range, min=0) {
  setTimeout(() => {
    fadeOut(div)
  }, Math.random() * range + min)
}

function delayedFadeIn(div, range, min=0) {
  setTimeout(() => {
    fadeIn(div)
  }, Math.random() * range + min)
}

function fadeAllOut(el, group) {
  group.forEach(div => {
    if (div !== el)
      delayedFadeOut(div, SHORTRANGE)
  })
  delayedFadeOut(el, LONGRANGE, MINDELAY)
}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  // should really be using a callback but...
  // move to promise ples
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
