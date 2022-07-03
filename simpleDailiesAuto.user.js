// ==UserScript==
// @name        Simple Dailies Automator
// @match       https://www.marapets.com/giganticfairy.php
// @match       https://www.marapets.com/potofgold.php
// @match       https://www.marapets.com/sewage.php
// @match       https://www.marapets.com/graves.php
// @match       https://www.marapets.com/sevenheaven.php*
// @match       https://www.marapets.com/archeology.php
// @match       https://www.marapets.com/undyingfairy.php
// @match       https://www.marapets.com/trash.php
// @match       https://www.marapets.com/rack.php
// @match       https://www.marapets.com/tree.php
// @match       https://www.marapets.com/ants.php
// @match       https://www.marapets.com/plushies.php
// @match       https://www.marapets.com/plushies2.php
// @match       https://www.marapets.com/vending.php
// @match       https://www.marapets.com/fishing.php
// @match       https://www.marapets.com/telescope.php
// @match       https://www.marapets.com/sultan.php
// @match       https://www.marapets.com/gumball.php
// @match       https://www.marapets.com/sugarstack.php
// @match       https://www.marapets.com/scratchcards2.php
// @match       https://www.marapets.com/graverobbing.php
// @match       https://www.marapets.com/giveaways.php
// @match       https://www.marapets.com/burst.php*
// @match       https://www.marapets.com/nuttytree.php
// @match       https://www.marapets.com/jackpot.php*
// @match       https://www.marapets.com/multiplier.php*
// @match       https://www.marapets.com/spooks.php*
// @match       https://www.marapets.com/wormdigging.php
// @match       https://www.marapets.com/sword.php
// @match       https://www.marapets.com/dash.php*
// @match       https://www.marapets.com/tombola*
// @match       https://www.marapets.com/trojan.php
// @match       https://www.marapets.com/pipes.php*
// @match       https://www.marapets.com/cloudnine.php*
// @match       https://www.marapets.com/doubleornothing.php
// @match       https://www.marapets.com/guesstheweight.php
// @match       https://www.marapets.com/pancakes.php
// @match       https://www.marapets.com/pie.php*
// @match				https://www.marapets.com/fruitmachine.php
// @version     1.0.0
// @author      themagicteeth
// @description Automates simple games with just one button to click.
// ==/UserScript==

/*jshint -W033 */

"use strict"

/* *
 * Automates most every daily (or task) which is simple enough to automate.
 * */

function clickButton(buttonValue) {
  const button = [...document.querySelectorAll("input")].find((e) => e.value.includes(buttonValue))
  if (button) {
    button.click()
  }
}

function pickRandom(selector) {
  const elements = document.querySelectorAll(selector)
  elements[Math.floor(Math.random() * elements.length)].click()
}

if (!document.querySelector("div.middleit.comebackbox")) {
  if (document.URL.includes("multiplier")) {
    pickRandom(".middleit.flex-table #eachitemdiv a")
  } // Mummy Multiplier
  if (document.URL.includes("jackpot")) {
    pickRandom(".pyramid a")
  } // Jackpot Pyramid
  if (document.URL.includes("wormdigging")) {
    pickRandom(".wormbox.flex-middle.flex-grow input")
  } // Worm Digging
  if (document.URL.includes("nuttytree")) {
    pickRandom(".middleit.flex-table .flex-buttons form input[type='submit']")
  } // Nutty Tree
  if (document.URL.includes("spooks")) {
    pickRandom(".middleit.flex-table #eachitemdiv.itemwidth.fixborders a")
  } // Spooks Busters
  if (document.URL.includes("burst")) {
    pickRandom(".middleit.flex-table #eachitemdiv.itemwidth.fixborders a")
  } // Balloon Burst
  if (document.URL.includes("giveaways")) {
    pickRandom("#eachitemdiv a")
  } // Giveaways
  if (document.URL.includes("graves")) {
    pickRandom(".maralayoutmiddle .flex-table .middleit a")
  } // Open Graves
  if (document.URL.includes("sewage")) {
    clickButton("Swim in the Sewage")
  } // Sewage
  if (document.URL.includes("giganticfairy")) {
    clickButton("Test Your Strength")
  } // Test Your Strength
  if (document.URL.includes("sevenheaven")) {
    clickButton("Roll Again")
  } // Seven Heaven
  if (document.URL.includes("undyingfairy")) {
    clickButton("Spin Wheel")
  } // Undying Fairy
  if (document.URL.includes("trash")) {
    clickButton("Grab Trash")
  } // Trash Heap
  if (document.URL.includes("ants.php")) {
    clickButton("Grab Prize")
  } // Ant Hill
  if (document.URL.includes("vending.php")) {
    clickButton("Use Vending Machine")
  } // Vending Macine
  if (document.URL.includes("rack")) {
    clickButton("Take Free Clothing")
  } // Clothing Rack
  if (document.URL.includes("graverobbing")) {
    clickButton("Rob a Grave")
  } // Grave Robbing
  if (document.URL.includes("archeology")) {
    clickButton("Dig for Simerian Artifacts")
  }
  if (document.URL.includes("potofgold")) {
    clickButton("Grab Prize")
  } // Pot of Gold
  if (document.URL.includes("/plushies2.php")) {
    clickButton("Move Down")
  } // Enchanted Plushie Machine
  if (document.URL.includes("fishing.php")) {
    clickButton("Go Fishing")
  } // Fishing
  if (document.URL.includes("/tree.php")) {
    clickButton("Shake Tree")
  } // Christmas Tree, shake for the avatar
  if (document.URL.includes("sugarstack")) {
    clickButton("Play for 1,000MP")
  } // Sugar Stack
  if (document.URL.includes("telescope")) {
    clickButton("Use for 2,000MP")
  } // Telescope
  if (document.URL.includes("gumball")) {
    clickButton("Put in 150MP")
  } // Gumball Machine
  if (document.URL.includes("/plushies.php")) {
    clickButton("Move Down")
  } // Plushie Machine
  if (document.URL.includes("scratchcards2.php")) {
    clickButton("Buy Scratchcard")
  } // Scratchcards
  if (document.URL.includes("/sword.php")) {
    clickButton("Lift Sword from the Stone")
  } // Sword in the Stone
  if (document.URL.includes("sultan")) {
    clickButton("Tax")
  } // Sultan Loyalty

  // Guess the Flag
  if (document.URL.includes("trojan")) {
    const input = document.querySelector("input[name='country']")
    let country = document.querySelector("form .middleit img").getAttribute("src").split("_")[1].split(".")[0]

    // Check for countries which don't match the image name
    if (country === "Bosnia") {
      country = "Bosnia and Herzegovina"
    }
    if (country === "Trinidad") {
      country = "Trinidad and Tobago"
    }
    if (country === "UK") {
      country = "United Kingdom"
    }
    if (country === "UAE") {
      country = "United Arab Emirates"
    }

    input.value = country
    clickButton("Guess the Flag")
  }

  // Dukka Dash
  if (document.URL.includes("/dash.php")) {
    clickButton("Play for 3,000MP")
    pickRandom(".middleit.flex-table #eachitemdiv.itemwidth.fixborders a")
  }

  // Cloud Nine
  if (document.URL.includes("cloudnine")) {
    const whiteClouds = "img[src='https://images.marapets.com/clouds/cloud.png']"
    const stormClouds = "img[src='https://images.marapets.com/clouds/storm.png']"

    if (whiteClouds.length > 6) {
      pickRandom(whiteClouds)
    }
    if (stormClouds.length !== 0) {
      pickRandom(stormClouds)
    }
  }

  // Double or Nothing
  if (document.URL.includes("/doubleornothing.php")) {
    const coins = document.querySelectorAll("input[name='submit']")

    // Only if we have coins to click
    // Click a random coin, every two seconds (it bugs out otherwise)
    if (coins.length !== 0) {
      setTimeout(() => {
        coins[Math.floor(Math.random() * coins.length)].click()
      }, 1200)
    }
  }

  // Guess the Weight
  if (document.URL.includes("/guesstheweight.php")) {
    const weightInput = document.querySelector("input[name='weight'")
    if (weightInput) {
      weightInput.value = Math.floor(Math.random() * 100)
      document.querySelector("input[value='Guess the Weight']").click()
    }
  }

  // Pie Throw
  if (document.URL.includes("/pie.php")) {
    clickButton("Play for 500MP")
    const throwPieButtons = Array.from(document.querySelectorAll(".maralayoutmiddle .middleit.flex-table .flex-buttons form input")).slice(0, 6)
    if (throwPieButtons.length > 0) {
      throwPieButtons[Math.floor(Math.random() * throwPieButtons.length)].click()
    }
  }

  // Pancake Pile
  if (document.URL.includes("/pancakes.php")) {
    clickButton("Play for 400MP")
    const pancakes = Array.from(document.querySelectorAll(".pancakes_each a")) // Array of pancakes

    if (pancakes.length === 6) {
      const firstClick = pancakes[Math.floor(Math.random() * pancakes.length)]
      GM_setValue("clickedPancake", firstClick.href.split("id=").pop())
      firstClick.click()
    }

    if (pancakes.length < 6) {
      const clickedPancake = GM_getValue("clickedPancake")
      let options = []

      if (clickedPancake === "0") {
        options = [pancakes[0], pancakes[2], pancakes[4], pancakes[5]]
      } else if (clickedPancake === "1") {
        options = [pancakes[0], pancakes[3], pancakes[4], pancakes[5]]
      } else if (clickedPancake === "2") {
        options = [pancakes[0], pancakes[3], pancakes[4]]
      } else if (clickedPancake === "3") {
        options = [pancakes[1], pancakes[2], pancakes[5]]
      } else if (clickedPancake === "4") {
        options = [pancakes[0], pancakes[2], pancakes[5]]
      } else {
        options = [pancakes[0], pancakes[1], pancakes[3], pancakes[4]]
      }

      GM_setValue("clickedPancake", null)

      options[Math.floor(Math.random() * options.length)].click()
    }
  }
}

// All Tombola (Tombola must be outside the check for all other dailies)
if (document.URL.includes("tombola")) {
  const takeTicket = document.getElementById("playTombola")
  if (takeTicket) {
    setTimeout(() => {
      takeTicket.click()
    }, 1000)
  }
}

// Fruit Machine
if (document.URL.includes("fruitmachine")) {
  const spinMachine = document.getElementById("startSpin")
  if (spinMachine) {
    spinMachine.click()
  }
}
