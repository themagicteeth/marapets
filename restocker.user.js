// ==UserScript==
// @name        Restocker
// @namespace   Marascripts
// @match       https://www.marapets.com/shop.php*
// @grant       none
// @version     1.0.0
// @author      themagicteeth
// @description -
// @license     MIT
// ==/UserScript==

const MAX_PRICE = 600

if (!document.URL.includes("id=")) {
  setTimeout(() => {
    document.querySelector(".middleit input").click()
  }, 3500)
}

if (!document.URL.includes("?do=buy")) {
  const allItems = Array.from(document.querySelectorAll(".itemwidth"))
  const itemsToBuy = []

  for (const item in allItems) {
      const price = parseInt(allItems[item].querySelector(".currencytext").innerText.split(" ").pop().split("MP")[0].replace(/,/g, ""))

      if (price <= MAX_PRICE) {
        itemsToBuy.push(allItems[item].querySelector(".fixborders.itempadding.middleit a"))
      }
  }

  setTimeout(() => {
    itemsToBuy[Math.floor(Math.random() * itemsToBuy.length)].click()
  }, 3500)
}


if (document.URL.includes("?do=buy")) {
  if (!document.querySelector("input[name='code']")) {
    setTimeout(() => {
      document.querySelector("button").click()
    }, 3500)
  }
}
