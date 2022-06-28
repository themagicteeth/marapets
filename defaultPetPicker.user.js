// ==UserScript==
// @name        Default Pet Picker
// @namespace   Marascripts
// @description Automatically selects your default pet, and does the daily.
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/guillotine.php
// @match       https://www.marapets.com/pond.php?i_id=*
// @match       https://www.marapets.com/sewerpipes.php
// @match       https://www.marapets.com/icecaves.php
// @match       https://www.marapets.com/reservoir.php
// @match       https://www.marapets.com/whirlpool.php
// @match       https://www.marapets.com/genie.php
// @match       https://www.marapets.com/pixie.php
// @match       https://www.marapets.com/statue.php
// @match       https://www.marapets.com/elekafountain.php
// @match       https://www.marapets.com/rollercoaster.php
// @match       https://www.marapets.com/portal.php
// @license     MIT
// ==/UserScript==

/**
 * TODO:  Cure pet who gets sick on rollercoaster, or at fountain
 * 
 * Games supported:
 * 
 * Guillotine
 * Foxfire Pond
 * Operations Portal
 * Eleka Fountain
 * Murfin Madness
 * Pixie Dice
 * Sewer Pipes
 * Simerian Statue
 * Ice Caves
 * Vortex Park Resevoir
 */

const defaultPetImg = document.querySelector(".defaultpet")

if (defaultPetImg) {
    const defaultPetLink = defaultPetImg.parentElement
    defaultPetLink.onclick = ""
    defaultPetLink.click()
}
