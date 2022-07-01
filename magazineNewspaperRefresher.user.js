// ==UserScript==
// @name        Magazine Newspaper Refresher
// @namespace   Marascripts
// @description Refreshes and buys Magazines and Newspapers on cooldown.
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/newsagent.php
// @match       https://www.marapets.com/magazines.php
// @license     MIT
// ==/UserScript==

"use strict"

setTimeout(() => {
  location.reload()
}, 100000)

const submit = document.querySelector("input[type='submit']")
if (submit) {
  submit.click()
}
