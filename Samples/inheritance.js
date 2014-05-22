function Animal() {
    this.value = 'Animal';
    this.sound = 'undefined, dunno which animal am I';
};

Animal.prototype = {
    shout: function() {
        console.log(this.sound);
    }
};

function Dog() {
    this.value = 'Dog';
    this.sound = 'Woof!';
}

function Cat() {
    this.sound = 'Meoooow!';
}

Cat.prototype = new Animal();
Dog.prototype = new Animal();

Cat.prototype.constructor = Cat;
Dog.prototype.constructor = Dog;