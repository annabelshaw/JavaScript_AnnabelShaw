// Step 1: Create a literal object called myDog
var myDog = {
    name: "Jake",
    owner: "Finn",
    age: "28 magical dog years old",
    description: "a generic looking yellow dog with magical powers living in the post-apocalyptic Land of Ooo",
    mySound: "I sound very silly because of my humor",
    greet: function () {
        return `
            Hello, my name is ${this.name}.
            I am ${this.age}.
            I am ${this.description}.
            When I talk, ${this.mySound}.
        `;
    }
};

// Display myDog's information
var myDogInfo = document.getElementById("myDogInfo");
myDogInfo.innerHTML = myDog.greet();

// Step 2: Create a constructor function for myDogConst
function Dog(name, owner, age, description, mySound, canTalk) {
    this.name = name;
    this.owner = owner;
    this.age = age;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.myGreeting = function () {
        let soundDescription = this.canTalk ? "I can talk." : "I cannot talk.";
        return `
            Hello, my name is ${this.name}.
            I am ${this.age}.
            I am ${this.description}.
            When I talk, ${this.mySound}.
            ${soundDescription}
        `;
    };
}

// Step 3: Create a myDogConst object and display its information
var myDogConst = new Dog("Jake", "Finn", "28 magical dog years old", "a generic looking yellow dog with magical powers living in the post-apocalyptic Land of Ooo", "I sound very silly because of my humor", true);

// Display myDogConst's information
var myDogConstInfo = document.getElementById("myDogConstInfo");
myDogConstInfo.innerHTML = myDogConst.myGreeting();
