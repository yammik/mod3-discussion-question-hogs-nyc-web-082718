# Let's make some jazzy transitions

We have starter code for a personal website and we want to make some minor changes.

Naturally, this website is to impress our friends and family, and we really want it to shine.

We want to add some flashiness to our transitions, but we want them to be subtle. They should add to the user experience, but not distract from the main focus: educating others on the things we love about hogs.


## What we have
Currently, when any glowing text is clicked, we are transitioned to a hog shrine page. All elements on the screen fade out at the same time and are followed by new elements fading in.

## What we want
Building on this, we want to make two major changes:
- The element that is clicked should be the last one to fade out (but only by a little!)
- All other elements should fade out within a small range of each other and not at exactly the same time

[Completed Example](https://danielseehausen.github.io/transition-animations/)

The only file(s) that should be altered is/are index.js and any constants you are interested in using within config.js. Make use of existing functions -- a.k.a. keep it DRY!

Keep in mind that we don't want anything to start fading in until the old page elements have faded out.
```
      __,---.__
   ,-'         `-.__
 &/   Truffle  `._\ _\
 /    Shuffle    ''._
 |   ,             (")
 |__,'`-..--|__|--''
```
