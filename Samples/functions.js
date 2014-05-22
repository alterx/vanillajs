// Function declaration 

foo(); // It works! :D

function foo() { 
    console.log('I got hoisted, so basically you can call me wherever you want to. Even before my declaration.');
}

// Function Expression

bar // I'm undefined, but I exist since i got hoisted (i'm a declaration, see var statement). Saddly, assignments only occur
// during runtime, so calling bar(); will result in a type error.

var bar = function() {
    console.log('I\'m just an anonym function assigned to bar.');
};

bar(); // YAY! This works. 