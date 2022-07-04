// ==UserScript==
// @name        Magazine Newspaper Refresher
// @namespace   Marascripts
// @description Refreshes and buys Magazines and Newspapers on cooldown.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/magazineNewspaperRefresher.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.1
// @match       https://www.marapets.com/newsagent.php
// @match       https://www.marapets.com/magazines.php
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

"use strict"

setTimeout(() => {
  document.querySelector(".mainfeature_art a").click()
}, 100000)

const submit = document.querySelector("input[type='submit']")
if (submit) {
  submit.click()
}
