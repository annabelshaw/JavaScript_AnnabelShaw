// Ask user for their first name and display welcome message
var Fname = prompt("Please enter your first name:");
alert("Hello " + Fname + "!");

// Constant variable to store the value of Pi
const myPi = Math.PI;

// Ask user to input their favorite number
var myFavNum = parseFloat(prompt("Please enter your favorite number:"));

// Calculate the area of a circle using the inputted favorite number as the radius
var myArea = myPi * Math.pow(myFavNum, 2);

// Output results
document.write("Hello " + Fname + "! You entered " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle's area would be " + myArea.toFixed(6) + ".");
