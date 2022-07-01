// ==UserScript==
// @name        Banking Helper
// @namespace   Marascripts
// @description Automatically fills in your pin at the ATM.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/bankingHelper.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/atm.php
// @match       https://www.marapets.com/bpbank.php
// @match       https://www.marapets.com/rpbank.php
// @match       https://www.marapets.com/bank.php
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

"use strict"

/**
 * * Put PIN here.
 */
const MY_PIN = "0000"

document.querySelector(
  "form[action='https://www.marapets.com/atm.php?do=deposit'] input[name='pin']"
).value = MY_PIN

document.querySelector(
  "form[action='https://www.marapets.com/atm.php?do=withdraw'] input[name='pin']"
).value = MY_PIN

const button = [...document.querySelectorAll("input")].find((e) =>
  e.value.includes("Interest")
)
if (button) {
  button.click()
}
