// ==UserScript==
// @name        Banking Helper
// @namespace   Marascripts
// @description Automatically fills in your pin at the ATM.
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/atm.php
// @match       https://www.marapets.com/bpbank.php
// @match       https://www.marapets.com/rpbank.php
// @match       https://www.marapets.com/bank.php
// @license     MIT
// ==/UserScript==

"use strict"

/**
 * Put PIN here.
 */
const MY_PIN = "0000"

// Deposit and Withdraw input boxes
const DEPOSIT = document.querySelector(
  "form[action='https://www.marapets.com/atm.php?do=deposit'] input[name='pin']"
)
const WITHDRAW = document.querySelector(
  "form[action='https://www.marapets.com/atm.php?do=withdraw'] input[name='pin']"
)

// Set the value to your PIN
DEPOSIT.value = MY_PIN
WITHDRAW.value = MY_PIN

// Collect interest
const button = [...document.querySelectorAll("input")].find((e) =>
  e.value.includes("Interst")
)
if (button) {
  button.click()
}
