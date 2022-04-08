const meterToFeet = document.getElementById("MeterToFeet");
const LitersToGallons = document.getElementById("LitersToGallons");
const KgToPounds = document.getElementById("KgToPounds");

function convertNumber(event) {
  const currentValue = event.target.value;
  meterToFeet.innerText = `${currentValue || 7} meters = ${
    Math.round(currentValue * 3.2808 * 1000) / 1000
  } feet | ${currentValue} feet = ${
    Math.round((currentValue / 3.2808) * 1000) / 1000
  } meters`;
  LitersToGallons.innerText = `${currentValue} liters = ${
    Math.round(currentValue * 0.264172052 * 1000) / 1000
  } gallons | ${currentValue} gallons = ${
    Math.round((currentValue / 0.264172052) * 1000) / 1000
  } liters `;
  KgToPounds.innerText = `${currentValue} kilos = ${
    Math.round(currentValue * 2.20462 * 1000) / 1000
  } pounds | ${currentValue} pounds = ${
    Math.round((currentValue / 2.20462) * 1000) / 1000
  } kilos `;
}
