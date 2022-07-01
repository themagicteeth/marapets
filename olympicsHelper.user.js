// ==UserScript==
// @name        Olympics Helper
// @namespace   Marascripts
// @description Picks the best Olympic event for each pet.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/olympicsHelper.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/competitions.php
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==

/**
 * This is meant to be left open on the Olympics page, it will
 * keep doing events as often as possible.
 *
 * Choose the rewards you want and add them to the desiredEvents array
 * in the order of importance.
 *
 * The script then loops through your chosen events for each pet,
 * finds the one with the highest level, and enters them.
 */

const bp = [4, 11, 18, 25] // Basketball, Golf, Rowing, Tennis
const fakeDukka = [6, 13, 20, 27] // Climbing, Handball, Sailing, Volleyball
const olympicPoints = [0, 7, 14, 24, 28] // Archery, Cycling, Hockey, Skateboarding, Weightlifting
const marapoints = [1, 8, 15, 22, 29] // Athletics, Equestrian, Hurdles, Surfing, Wrestling
const rp = [3, 10, 17, 24] // Baseball, Football, Karate, Taekwondo
const dukka = [5, 12, 19, 26] // Boxing, Gymnastics, Rugby, Triathalon
const au = [2, 9, 6, 25] // Badminton, Fencing, Judo, Swimming

const desiredEvents = [...au, ...olympicPoints, ...marapoints, ...rp, ...dukka]

const events = document.querySelectorAll(".eachpet_box.marapets_border")
if (events.length > 0) {
  const olympian = []
  const ultimate = []
  const expert = []
  const intermediate = []
  const beginner = []
  const untrained = []

  setTimeout(() => {
    for (const [i, event] of events.entries()) {
      if (desiredEvents.includes(i)) {
        const level = event.querySelector(".alsotry").innerText.split(" ")[0]
        const enterUrl = event.querySelector("a")
        enterUrl.onclick = null

        switch (level) {
          case "Olympian":
            olympian.push(enterUrl)
            break
          case "Ultimate":
            ultimate.push(enterUrl)
            break
          case "Expert":
            expert.push(enterUrl)
            break
          case "Intermediate":
            intermediate.push(enterUrl)
            break
          case "Beginner":
            beginner.push(enterUrl)
            break
          case "Untrained":
            untrained.push(enterUrl)
            break
        }
      }
    }

    // Pick the event with the highest level
    if (olympian.length > 0) olympian[0].click()
    else if (ultimate.length > 0) ultimate[0].click()
    else if (expert.length > 0) expert[0].click()
    else if (intermediate.length > 0) intermediate[0].click()
    else if (beginner.length > 0) beginner[0].click()
    else untrained[0].click()
  }, 1200)
}

// TODO: Stop using window.location
else if (document.querySelector(".bigger.petpadding")) {
  const entered = document.querySelector(".bigger.petpadding")
  if (entered.innerText.search("entered") > 0) {
    window.location.href = "https://www.marapets.com/competitions.php"
  }
} else {
  setTimeout(() => {
    window.location.href = "https://www.marapets.com/competitions.php"
  }, 100000)
}
