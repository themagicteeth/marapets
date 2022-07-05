// ==UserScript==
// @name        Avatar Solution Helper
// @namespace   Marascripts
// @description Adds direct solution links to missing avatars.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/avatarSolutions.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.1
// @match       https://www.marapets.com/stalker.php*
// @match       https://www.marapets.com/avatars.php?missing=1*
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==
/*jshint -W033 */


if (document.URL.includes("/avatars.php")) {
  const missingAvatars = document.querySelectorAll("#eachitemdiv")

  for (const avatar in missingAvatars) {
    missingAvatars[avatar].style.paddingBottom = "15px"

    if (!missingAvatars[avatar].querySelector(".offline")) {
      const name = missingAvatars[avatar].querySelector(".itempadding .bigger").innerText.replace(/ /g, "+")
      const link = document.createElement("a")
      const linkText = document.createTextNode("Check Solution")

      link.appendChild(linkText)
      link.href = `https://www.maraforce.com/avatars.php?search=${name}`
      link.target = "_blank"
      link.style.color = "gray"
      link.style.fontWeight = 700

      missingAvatars[avatar].appendChild(link)
    }
  } 
}

if (document.URL.includes("/stalker.php")) {
  const avatar = document.querySelector(".sbigger").innerText.split(" Hidden Avatar")[0]
  if (avatar) {
    const urlEncodedAvatar = avatar.replace(/ /g, "+")
  
    const checkSolution = document.querySelector(".pricecheck").parentElement
    checkSolution.href = `https://www.maraforce.com/avatars.php?search=${urlEncodedAvatar}`
  }
}
