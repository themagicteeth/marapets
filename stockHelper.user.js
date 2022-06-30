// ==UserScript==
// @name        Stock Helper
// @namespace   Marascripts
// @description Purchases the cheapest stock.
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/shares.php
// @license     MIT
// ==/UserScript==

'use strict'

const ON_COOLDOWN = document.querySelector(".middleit.comebackbox")

if (!ON_COOLDOWN) {
  const ON_BUY_PAGE = document.URL.includes("?do=company")

  if (!ON_BUY_PAGE) {
    let lowestPrice = 99_999
    let buyLink = ""
    const allCompanies = document.querySelectorAll(".fairyreward_box .itempadding span.currencytext b")

    allCompanies.forEach((company) => {
      const price = parseInt(company.innerText.split("MP")[0].replace(/,/g, ''))
      if (price < lowestPrice && price >= 100) {
        lowestPrice = price
        buyLink = company.parentElement.parentElement.parentElement.parentElement
      }
    })

    buyLink.click()
  }

  if (ON_BUY_PAGE) {
    const sharesToBuy = document.querySelector("input[name='amount']")
    sharesToBuy.value = 100

    const buyShares = document.querySelector("input[name='Submit']")
    buyShares.click()
  }
}
