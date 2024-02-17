function updateSliderValue() {
  //  the value of the slider
  const sliderValue = document.getElementById("numberOfHours").value;
  
  // Display the selected value
  document.getElementById("sliderValue").textContent = sliderValue + " hours";
}
function myfunciton(selection){
  if (selection.value = "other"){
      document.getElementById("thother").style.display = block;
  }
}
// Called the updateSliderValue function initially
updateSliderValue();
function calculateQuote() {
const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
const hours = parseFloat(document.getElementById("numberOfHours").value);
const currency = document.getElementById("selectedCurrency").value;

const exchangeRateAPI = "https://open.er-api.com/v6/latest/EUR";
  //  Loading indicator
  document.getElementById("quoteAmount").textContent = "Calculating...";

//Fetch API: fetches a file and displays the content
fetch(exchangeRateAPI)
  .then((response) => response.json())
  .then((data) => {
    const exchangeRate = data.rates[currency];
    const finalPrice = hourlyRate * hours * exchangeRate;

    document.getElementById("quoteAmount").textContent = finalPrice.toFixed(2) + ` ${currency}`;
  })
  .catch((error) => {
    console.error("Error fetching exchange rates: ", error);
  });
}


// Java Script for the Pay button
function redirectToLoginPage() {
  window.location.href = "./login.html";
}
