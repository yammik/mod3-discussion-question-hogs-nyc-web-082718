const FADEDURATION = 700 // this needs to match our css fade animation duration
const MINDELAY = 250      // the minimum delay until the animation begins
const SHORTRANGE = 200    // the delay range until non-selected elements begin their animation
const LONGRANGE = 300     // the delay range until the selected element begins its animation
const LONGESTPOSSIBLE = FADEDURATION + MINDELAY + LONGRANGE // used when transitioning to a new page -- ensures all animations are complete before this one begins
const HOMEGROUP = Array.from(document.getElementsByClassName("home-group"))
const MUDBLOODGROUP = Array.from(document.getElementsByClassName("mudblood-group"))
const PIGGYSMALLSGROUP = Array.from(document.getElementsByClassName("piggy-smalls-group"))
const TRUFFLESHUFFLEGROUP = Array.from(document.getElementsByClassName("truffleshuffle-group"))
const RAINBOWDASHGROUP = Array.from(document.getElementsByClassName("rainbowdash-group"))

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
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  // should really be using a callback but...
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
