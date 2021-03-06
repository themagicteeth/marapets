// ==UserScript==
// @name        Captcha Helper
// @match       https://www.marapets.com/elitegym.php
// @match       https://www.marapets.com/gym.php
// @match       https://www.marapets.com/school.php
// @match       https://www.marapets.com/university.php
// @match       https://www.marapets.com/agency.php
// @match       https://www.marapets.com/shop.php
// @match       https://www.marapets.com/brew.php
// @match       https://www.marapets.com/candytree.php
// @match       https://www.marapets.com/carpenter.php
// @match       https://www.marapets.com/computer.php
// @match       https://www.marapets.com/drew.php
// @match       https://www.marapets.com/farm.php
// @match       https://www.marapets.com/garage.php
// @match       https://www.marapets.com/elger.php
// @match       https://www.marapets.com/traveller.php
// @match       https://www.marapets.com/leprechaun.php
// @match       https://www.marapets.com/inn.php
// @match       https://www.marapets.com/secret.php
// @match       https://www.marapets.com/monster.php
// @match       https://www.marapets.com/socks.php
// @match       https://www.marapets.com/excavator.php
// @match       https://www.marapets.com/explorer.php
// @match       https://www.marapets.com/stalker.php
// @match       https://www.marapets.com/snowman.php
// @match       https://www.marapets.com/truck.php
// @match       https://www.marapets.com/battle.php
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/captchaHelper.user.js
// @grant       none
// @version     1.0
// @author      themagicteeth
// @description Focuses captcha input and submits when 6 characters are entered.
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==

/*jshint -W033 */

"use strict"

/* *
 * This script makes captchas less annoying.
 *
 * It trys to target all pages where a captcha could appear, including:
 *  - Shops
 *  - Quests
 *  - Battles
 *  - Freelance Jobs
 *  - Training
 *
 * Simply put, on a page with a captcha two things will happen:
 *  1) Focuses the captcha input box
 *  2) Once six numbers are entered, it will submit
 *
 * */

// This is the  input for the captcha, if it is present, we have a captcha
const captcha = document.querySelector("input[name='code']")

// If we have a captcha, focus it, and once six numbers are entered, submit.
if (captcha) {
  captcha.focus() // Focus captcha input
  captcha.oninput = () => {
    // Once six numbers are inpt
    if (captcha.value.length === 6) {
      const submit = document.querySelector("input[type='submit']")
      submit.click()
    }
  }
}
