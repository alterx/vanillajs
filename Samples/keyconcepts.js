// Late binding

var obj = {
    testFunction: function() {
        console.log('Context: ',this);
    }
}

obj.testFunction();

var test = obj.testFunction;

test();


// Closures and references

function User(pname, ppassword) {
    var name = pname,
        password = ppassword;
        
    return {
        getName: function() {
            return name;
        }
    }
}

// getName keeps a reference to the original context in which name and password are defined.
// In JS every function acts as a closure


// Scoping

var a = 'i am the coolest var evar!';
console.log('a:', a);
function nope() {
    a = 'I don\'t think so.'
    
    console.log('inner a:', a);
    
    return function() {
        var a = 'FUUUUU! Stop this madness!';
        console.log('inner inner a:', a);
    }
}
nope()();
console.log('a:', a);

// Hoisting

hoistedFunction(); 
// wait, why is this working if there's no hoistedFunction defined up there? - Because hoisting, that's why.

/* -----------------------------------------  */

function hoistedFunction() {
    console.log('I work, even if they call me before my definition.');
}