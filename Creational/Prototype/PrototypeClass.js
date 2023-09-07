class Dog{
    constructor(name,age){
        this.name = name;
        this.age= age
    }
    
    // automatically added to the prototype.
    bark(){
        return `${this.name} "Woof!"`
    }
    wagTail(){
        return `${this.name} is wagging their tail!`
    }
}

const dog1 = new Dog("Daisy",12);
const dog2 = new Dog("Max",9);
console.log("dog1", dog1.bark(), dog1.wagTail());

console.log(dog1.__proto__); // Dog {}
console.log(Dog.prototype); // Dog {}

// Since all instances have access to the prototype, 
// it's easy to add properties to the prototype even after creating the instances.
Dog.prototype.play = () => console.log("Playing now!");

dog1.play();

//The value of __proto__ on the prototype of SuperDog points to the Dog.prototype object!

class SuperDog extends Dog {
    constructor(name){
        super( name)
    }
    fly(){
        console.log('Flying!')
    }
}

const dog3 = new SuperDog("Daisy");
dog3.bark();
dog3.fly();

