// ==UserScript==
// @name        Freelance Picker
// @namespace   Marascripts
// @description Picks the most profitable Freelance Job.
// @updateURL   https://github.com/themagicteeth/marapets/raw/main/freelancePicker.user.js
// @grant       none
// @author      themagicteeth
// @version     1.0.0
// @match       https://www.marapets.com/agency.php
// @homepageURL https://github.com/themagicteeth/marapets
// @supportURL  https://github.com/themagicteeth/marapets/issues
// @icon        https://marapets.com/favicon.ico
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

"use strict"

// Check to make sure that we aren't on a job before continuing
if (!document.querySelector(".bigger.middleit.comebackbox")) {
  const unqualified = [...document.querySelectorAll(".fadeit3")] // Jobs we are not qualified for
  const allJobs = [...document.querySelectorAll(".itemwidth.fixborders")] // All the available jobs

  let bestRatio = 0 // Placeholder variable for the best time/MP ratio
  let bestJob = "" // Placeholder for the ID of the best job

  // Loop through all the jobs, and if it is not in the array
  // of unqualified jobs, compare the ratio to the current best
  // if it is better, set the ID as the bestJob variable
  for (const allJob of allJobs) {
    if (!unqualified.includes(allJob)) {
      const job = allJob.innerText.split(" ") // Text of the job // Text of the job
      const time = getJobTime(job)
      const ratio = getJobRatio(job, time)

      // Check if the ratio of this job is better than the current best
      // If it is we update both variables (bestRatio and bestJob)
      if (ratio > bestRatio) {
        bestRatio = ratio
        bestJob = allJob.id
      }
    }
  }

  // Get the link of the best job by its ID and click it
  document.querySelector(`#${bestJob} a`).click()
}

// Gets the ratio of MP to time
function getJobRatio(job, time) {
  const pay = parseInt(job[0].split("MP")[0]) // Amount the job pays
  return pay / time // Ratio of time to MP
}

// Gets the job time, converts hours to minutes
function getJobTime(job) {
  const time = parseInt(job[1]) // Time of the job
  const timeUnit = job[2].split("\n")[0] // Minutes or hours
  return timeUnit !== "minutes" ? time * 60 : time // If "timeUnit" is not minutes, multiply "time" by 60
}
