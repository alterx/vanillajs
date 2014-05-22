console.log('Context: ',this); //This expression basically refers to the global context, in this case the window object.

function foo(param, param2) {
    console.log('Context: ',this);
    console.log('Param: ', param);
    console.log('Param: ', param2);
}

foo(); // In this case, this will also refer to the global context.

var test = {
    bar: function() {
        console.log('Context: ',this); 
    }
}

test.bar(); // In this case, this will refer to the test variable. -Wait wuuut? -Yup, test variable.

//Ok, so lets use the foo function we've already defined

new foo(); //It should refer to the window object, right?

// Nope, when used in conjunction with new, this will refer to the newly created object.

//So, is there a way to stop this madness? 

var obj = {};

foo.apply(obj, [1, 2]); 
foo.call(obj, 1, 2); 

// Look at this crazy mofo 

obj.test = function() {
    var that = this;
    function testInner() {
        console.log('Context(this): ',this);
        console.log('Context(that): ',that); 
    }
    testInner();
    // One would expect this to refer to obj, but it refers to the global scope :D crazy, huh? 
}

