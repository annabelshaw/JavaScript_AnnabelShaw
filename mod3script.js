// Part 1: For loop counter
function part1() {
  for (let count = 0; count <= 10; count++) {
    // Check if number is even or odd
    if (count % 2 === 0) {
      document.write(`Count ${count} is even<br>`);
    } else {
      document.write(`Count ${count} is odd<br>`);
    }
  }
}

// Part 2: Do While Loop
function part2() {
  // Prompt user for number between 5 and 20
  let myNum = prompt("Please enter a number between 5 and 20");
  myNum = parseInt(myNum);

  let counter = 1; // Define counter variable

  // Do while loop
  do {
    document.write(`Counter: ${counter}<br>`);
    counter++;
  } while (counter <= myNum);
}

// Part 3: Array Display
function part3() {
  // Store subjects in array
  const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

  // Display array values in a readable format using forEach()
  document.write("Subjects in a readable format:<br>");
  subjects.forEach(function(subject) {
    document.write(subject + "<br>");
  });

  // Add an extra line break
  document.write("<br>");

  // Display array values separated by commas using one statement
  const commaSeparated = subjects.join(", ");
  document.write("Subjects separated by commas:<br>" + commaSeparated);
}

// Call each part in response to user interactions
window.onload = function() {
  document.getElementById("part1Button").addEventListener("click", part1);
  document.getElementById("part2Button").addEventListener("click", part2);
  document.getElementById("part3Button").addEventListener("click", part3);
};
