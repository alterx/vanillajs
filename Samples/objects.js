var obj = {
    foo: 'foo',
    bar: 'bar'
};

obj.foo = 'foofoo';

console.log(obj.foo);
console.log(obj.bar);

console.log(obj.baz);

obj.baz = 25; 

console.log(obj.baz);

//We can use the square bracket notation

obj['baz'] = 27;

console.log(obj.baz);
console.log(obj['baz']);

delete obj['baz'];

for(var i in obj){
    console.log('Key:' + i, ', Value:' + obj[i]);
}

obj.1 = '23'; // Whooops! DON'T do this, instead use square bracket notation as follows 

obj[1] = '23';
console.log(obj[1]);


