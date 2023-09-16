// Define a constructor function for Dog objects
function Dog(name, breed, show, description, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.show = show;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.myGreeting = function () {
        let soundDescription = this.canTalk ? "I can talk!" : "I cannot talk.";
        return `Hello, my name is ${this.name}. I am a ${this.breed} from the show ${this.show}. ${this.description}. When I bark, ${this.mySound} ${soundDescription}`;
    };
}

// Create new dog objects
var courage = new Dog("Courage", "beagle", "Courage the Cowardly Dog", "I am an anthropomorphic dog who lives with a married couple of elderly farmers in the 'Middle of Nowhere'", "I sound very frightened.", true);
var goddard = new Dog("Goddard", "robotic dog", "The Adventures of Jimmy Neutron: Boy Genius", "I am Jimmy's robot dog; a boy genius who creates gadgets. We live in Retroville", "I sound like a regular dog even though I'm a robot!", false);
var jake = new Dog("Jake", "magical dog", "Adventure Time", "I am a generic looking yellow dog with magical powers living in the post-apocalyptic Land of Ooo", "I sound very silly because of my humor.", true);

// Display properties of each dog object using a for...in loop
for (var prop in courage) {
    console.log(`${prop}: ${courage[prop]}`);
}
console.log("-----------");
for (var prop in goddard) {
    console.log(`${prop}: ${goddard[prop]}`);
}
console.log("-----------");
for (var prop in jake) {
    console.log(`${prop}: ${jake[prop]}`);
}

// Prompt the user to select a dog
var selectedDogName = prompt("Select a dog by typing in a name (Courage, Goddard, or Jake):");

// Display the selected dog's information
var selectedDogInfo = document.getElementById("selectedDogInfo");

if (selectedDogName === "Courage") {
    selectedDogInfo.innerHTML = courage.myGreeting();
} else if (selectedDogName === "Goddard") {
    selectedDogInfo.innerHTML = goddard.myGreeting();
} else if (selectedDogName === "Jake") {
    selectedDogInfo.innerHTML = jake.myGreeting();
} else {
    selectedDogInfo.innerHTML = "Error: The selected dog does not exist.";
}
