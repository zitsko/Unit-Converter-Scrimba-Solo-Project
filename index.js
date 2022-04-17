const input = document.getElementById("number-input")
const convertedLength = document.getElementById("length-conversion")
const convertedVolume = document.getElementById("volume-conversion")
const convertedMass = document.getElementById("mass-conversion")

function multiply(numberInput, multiplicand) {
    let result = (numberInput * multiplicand).toFixed(3);
    return result
}

function division(numberInput, divisor) {
  let result = (numberInput / divisor).toFixed(3);
  return result; 
}

function calcLength(){
    const metersToFeet = multiply(input.value,3.281)
    const feetToMeters = division(input.value,3.281)
    return `
   ${input.value} meters = ${metersToFeet} feet | 
   ${input.value} feet = ${feetToMeters} meters
  `
}
  
function calcVolume(){
    const litersToGalons = multiply(input.value, 0.219)
    const galonsToLiters = division(input.value, 0.219)
    return `
    ${input.value} liters = ${litersToGalons} galons | 
    ${input.value} galons = ${galonsToLiters} liters
     `
}

function calcMass(){
    const kilogramsToPounds = multiply(input.value,  2.205)
    const poundsToKilograms = division(input.value , 2.205)
    return `
    ${input.value} kilograms = ${kilogramsToPounds} pounds | 
    ${input.value} pounds = ${poundsToKilograms} kilograms
    `  
}

document.addEventListener("input",displayConvertedUnits)

function displayConvertedUnits(){
 convertedLength.textContent= calcLength()
 convertedVolume.textContent= calcVolume()
 convertedMass.textContent= calcMass()
}
