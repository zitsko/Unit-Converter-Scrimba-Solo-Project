const conversionNumber = document.getElementById("number-input")
const convertedLength = document.getElementById("length-conversion")
const convertedVolume = document.getElementById("volume-conversion")
const convertedMass = document.getElementById("mass-conversion")


function convertLength(){
    const metersToFeet = conversionNumber.value * 3.281
    const metersToFeetRounded = metersToFeet.toFixed(3)
    const feetToMeters =conversionNumber.value / 3.281
    const feetToMetersRounded= feetToMeters.toFixed(3)
    return `
   ${conversionNumber.value} meters = ${metersToFeetRounded} feet | 
   ${conversionNumber.value} feet = ${feetToMetersRounded} meters
  `
  }
  
function convertVolume(){
    const litersToGalons = conversionNumber.value * 0.219
    const litersToGalonsRounded = litersToGalons.toFixed(3)
    const galonsToLiters = conversionNumber.value / 0.219
    const galonsToLitersRounded = galonsToLiters.toFixed(3)
    return `
    ${conversionNumber.value} liters = ${litersToGalonsRounded} galons | 
    ${conversionNumber.value} galons = ${galonsToLitersRounded} liters
     `
}

function convertMass(){
    const kilogramsToPounds = conversionNumber.value * 2.205
    const kilogramsToPoundsRounded = kilogramsToPounds.toFixed(3)
    const poundsToKilograms = conversionNumber.value / 2.205
    const poundsToKilogramsRounded= poundsToKilograms.toFixed(3)
    return `
    ${conversionNumber.value} kilograms = ${kilogramsToPoundsRounded} pounds | 
    ${conversionNumber.value} pounds = ${poundsToKilogramsRounded} kilograms
    `  
}

 
document.addEventListener("input",displayConvertedUnits)


function displayConvertedUnits(){
 convertedLength.textContent= convertLength()
 convertedVolume.textContent= convertVolume()
 convertedMass.textContent= convertMass()
}
 