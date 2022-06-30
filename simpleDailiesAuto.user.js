// ==UserScript==
// @name        Simple Dailies Auto
// @namespace   Marascripts
// @description Completes dailies which just require clicking one button.
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
// @match       https://www.marapets.com/magazines.php
// @match       https://www.marapets.com/newsagent.php
// @match       https://www.marapets.com/scratchcards2.php
// @match       https://www.marapets.com/sugarstack.php
// @match       https://www.marapets.com/sultan.php
// @match       https://www.marapets.com/sword.php
// @match       https://www.marapets.com/telescope.php
// @match       https://www.marapets.com/tombola*
// @license     MIT
// ==/UserScript==

'use strict'

/**
 * TODO: Add collecting wages from Job Agency
 * TODO: Add collecting interest from RP, BP, and MP banks
 * TODO: Add Fruit Machine
 * TODO: Add Daily Discount
 */

// Basic dailies, with just a single button and no delay needed
if (!document.querySelector("div.middleit.comebackbox")) {
  const submit = document.querySelector("input[type='submit']")
  if (submit) {
    submit.click()
  }
}

// Tombola, needs a delay before clicking
if (document.URL.includes("tombola")) {
  const takeTicket = document.getElementById("playTombola")
  if (takeTicket) {
    setTimeout(() => {
      takeTicket.click()
    }, 500)
  }
}
