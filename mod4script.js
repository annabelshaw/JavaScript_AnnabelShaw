// Verify service quality input is valid
function isValidServiceQuality(serviceQuality) {
    return serviceQuality === 'great' || serviceQuality === 'ok' || serviceQuality === 'poor';
}

// Verify service amount input is valid
function isValidServiceAmount(serviceAmount) {
    return parseFloat(serviceAmount) >= 5.0 && parseFloat(serviceAmount) <= 500.0;
}

// Function to calculate the tip
function calculateTip(serviceAmount, serviceQuality) {
    let tipPercentage;

    // Figure the tip percentage based on service quality
    switch (serviceQuality) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
        default:
            return -1;
    }

    // Calculate the tip amount
    const tip = parseFloat(serviceAmount) * tipPercentage;
    return tip;
}

// Prompt user for service amount and quality
const serviceAmount = prompt("Enter the total dollar amount of the service:");
const serviceQuality = prompt("Was the service quality great, ok, or poor?").toLowerCase();

// Check for valid inputs and calculate tip
if (isValidServiceAmount(serviceAmount) && isValidServiceQuality(serviceQuality)) {
    const tipAmount = calculateTip(serviceAmount, serviceQuality);
    if (tipAmount !== -1) {
        alert(`Service Amount: $${serviceAmount}\nRecommended Tip: $${tipAmount.toFixed(2)} (for ${serviceQuality} service)`);
    } else {
        alert("Invalid entry. Please try again ('great', 'ok', 'poor').");
    }
} else {
    alert("Invalid entry. Please enter an amount between $5.00 and $500.00.");
}
