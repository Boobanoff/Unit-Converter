////// Ratios for conversion
const metricLratio = 3.28084
const metricVratio = 0.264172
const metricMratio = 2.20462
const imperialLratio = 0.3048
const imperialVratio = 4.54609
const imperialMratio = 0.453592

////// HTML Elements
const inputEl = document.getElementById("input-el")
const Lresult = document.getElementById("lresult")
const Vresult = document.getElementById("vresult")
const Mresult = document.getElementById("mresult")

////// Getting conversion results first so I can use the toFixed method
let metricLresult = inputEl.value * metricLratio
let metricVresult = inputEl.value * metricVratio
let metricMresult = inputEl.value * metricMratio
let imperialLresult = inputEl.value * imperialLratio
let imperialVresult = inputEl.value * imperialVratio
let imperialMresult = inputEl.value * imperialMratio

////// Functions
inputEl.addEventListener("input", function() {

    Lresult.textContent = `${inputEl.value} meters = ${metricLresult.toFixed(3)} feet | ${inputEl.value} feet = ${imperialLresult.toFixed(3)} meters`


}) 
 




