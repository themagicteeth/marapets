// ==UserScript==
// @name        Simple Dailies Auto
// @namespace   Marascripts
// @description Completes dailies which just require clicking one button.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/simpleDailiesAuto.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/ants.php
// @match       https://www.marapets.com/archeology.php
// @match       https://www.marapets.com/rack.php
// @match       https://www.marapets.com/fishing.php
// @match       https://www.marapets.com/graverobbing.php
// @match       https://www.marapets.com/potofgold.php
// @match       https://www.marapets.com/sevenheaven.php
// @match       https://www.marapets.com/sewage.php
// @match       https://www.marapets.com/giganticfairy.php
// @match       https://www.marapets.com/trash.php
// @match       https://www.marapets.com/undyingfairy.php
// @match       https://www.marapets.com/vending.php
// @match       https://www.marapets.com/darkfairy.php
// @match       https://www.marapets.com/gumball.php
// @match       https://www.marapets.com/scratchcards2.php
// @match       https://www.marapets.com/sugarstack.php
// @match       https://www.marapets.com/sultan.php
// @match       https://www.marapets.com/sword.php
// @match       https://www.marapets.com/telescope.php
// @match       https://www.marapets.com/tombola*
// @match       https://www.marapets.com/guesstheweight.php
// @match       https://www.marapets.com/trojan.php
// @match       https://www.marapets.com/fruitmachine.php
// @match       https://www.marapets.com/jobs.php
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

"use strict"

/**
 * TODO: Add collecting wages from Job Agency
 * TODO: Add collecting interest from RP, BP, and MP banks
 * TODO: Check is we still need to check for .comebackbox
 */

if (!document.querySelector("div.middleit.comebackbox")) {
  // Guess the Flag
  const countryGuess = document.querySelector("input[name='country']")
  if (countryGuess) {
    const country = document
      .querySelector("form .middleit img")
      .getAttribute("src")
      .split("_")[1]
      .split(".")[0]

    const fixCountry = {
      Bosnia: "Bosnia and Herzegovina",
      Trinidad: "Trinidad and Tobago",
      UK: "United Kingdom",
      UAE: "United Arab Emirates",
    }

    countryGuess.value = fixCountry[country] ? fixCountry[country] : country
    document.querySelector("input[value='Guess the Flag']").click()
  }

  // Guess the Weight
  const weightInput = document.querySelector("input[name='weight'")
  if (weightInput) {
    weightInput.value = Math.floor(Math.random() * 100)
    document.querySelector("input[value='Guess the Weight']").click()
  }

  //Basic dailies
  const submit = document.querySelector("input[type='submit']")
  if (submit) {
    submit.click()
  }
}

// Fruit Machine, and Daily Discount
const startSpin = document.getElementById("startSpin")
if (startSpin) {
  setTimeout(() => {
    startSpin.click()
  }, 500)
}

// Tombola, needs a delay before clicking
const takeTicket = document.getElementById("playTombola")
if (takeTicket) {
  setTimeout(() => {
    takeTicket.click()
  }, 500)
}
