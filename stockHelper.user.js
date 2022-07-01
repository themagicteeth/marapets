// ==UserScript==
// @name        Stock Helper
// @namespace   Marascripts
// @description Purchases the cheapest stock.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/stockHelper.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/shares.php
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

'use strict'

if (!document.querySelector(".middleit.comebackbox")) {
  const ON_BUY_PAGE = document.URL.includes("?do=company")

  if (!ON_BUY_PAGE) {
    let lowestPrice = 99999
    let buyLink = ""

    document.querySelectorAll(".fairyreward_box .itempadding span.currencytext b").forEach((company) => {
      const price = parseInt(company.innerText.split("MP")[0].replace(/,/g, ''))
      if (price < lowestPrice && price >= 100) {
        lowestPrice = price
        buyLink = company.parentElement.parentElement.parentElement.parentElement
      }
    })

    buyLink.click()
  }

  if (ON_BUY_PAGE) {
    document.querySelector("input[name='amount']").value = 100
    document.querySelector("input[name='Submit']").click()
  }
}
