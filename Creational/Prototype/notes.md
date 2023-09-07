### Prototype Pattern
## Share properties among many objects of the same type
```
The prototype is an object that's native to JavaScript,
                        and can be accessed by objects 
                                                through the prototype chain.
```
```
The value of __proto__ on any instance of the constructor, is a direct reference to the constructor's prototype! Whenever we try to access a property on an object that doesn't exist on the object directly, JavaScript will go down the prototype chain to see if the property is available within the prototype chain.
```
![Alt text](image https://www.patterns.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1609056524%2Fpatterns.dev%2FScreen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png&w=3840&q=75)


```
 Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.

 Since all instances have access to the prototype, it's easy to add properties to the prototype even after creating the instances.

```
### Prototype chain
```
The term prototype chain indicates that there could be more than one step. Indeed! So far, we've only seen how we can access properties that are directly available on the first object that __proto__ has a reference to. However, prototypes themselves also have a __proto__ object!

![Alt text](image https://www.patterns.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1609056523%2Fpatterns.dev%2FScreen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png&w=3840&q=75)

It gets clear why it's called a prototype chain: when we try to access a property that's not directly available on the object, JavaScript recursively walks down all the objects that __proto__ points to, until it finds the property!

```

### Object.create
```
Object.create is a simple way to let objects directly inherit properties from other objects, by specifying the newly created object's prototype. The new object can access the new properties by walking down the prototype chain.

Send feedback
Prototype Pattern
Share properties among many objects of the same type

Design Patterns
Introduction
Singleton Pattern
Proxy Pattern
Provider Pattern
Prototype Pattern
Container/Presentational Pattern
Observer Pattern
Module Pattern
Mixin Pattern
Mediator/Middleware Pattern
HOC Pattern
Render Props Pattern
Hooks Pattern
Flyweight Pattern
Factory Pattern
Compound Pattern
Command Pattern
Rendering Patterns
Introduction
Overview of React.js
Client-side Rendering
Server-side Rendering
Static Rendering
Incremental Static Generation
Progressive Hydration
Streaming Server-Side Rendering
React Server Components
Selective Hydration
Islands Architecture
Animating View Transitions
Performance Patterns
Optimize your loading sequence
Static Import
Dynamic Import
Import On Visibility
Import On Interaction
Route Based Splitting
Bundle Splitting
PRPL Pattern
Tree Shaking
Preload
Prefetch
Optimize loading third-parties
List Virtualization
Compressing JavaScript
The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.

In our applications, we often have to create many objects of the same type. A useful way of doing this is by creating multiple instances of an ES6 class.

Let's say we want to create many dogs! In our example, dogs can't do that much: they simply have a name, and they can bark!

class Dog {
  constructor(name) {
    this.name = name;
  }
 
  bark() {
    return `Woof!`;
  }
}
 
const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");
Notice here how the constructor contains a name property, and the class itself contains a bark property. When using ES6 classes, all properties that are defined on the class itself, bark in this case, are automatically added to the prototype.

We can see the prototype directly through accessing the prototype property on a constructor, or through the __proto__ property on any instance.

console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
 
console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
The value of __proto__ on any instance of the constructor, is a direct reference to the constructor's prototype! Whenever we try to access a property on an object that doesn't exist on the object directly, JavaScript will go down the prototype chain to see if the property is available within the prototype chain.

Flow
The prototype pattern is very powerful when working with objects that should have access to the same properties. Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.

Since all instances have access to the prototype, it's easy to add properties to the prototype even after creating the instances.

Say that our dogs shouldn't only be able to bark, but they should also be able to play! We can make this possible by adding a play property to the prototype.

index.js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();
Open CodeSandbox

The term prototype chain indicates that there could be more than one step. Indeed! So far, we've only seen how we can access properties that are directly available on the first object that __proto__ has a reference to. However, prototypes themselves also have a __proto__ object!

Let's create another type of dog, a super dog! This dog should inherit everything from a normal Dog, but it should also be able to fly. We can create a super dog by extending the Dog class and adding a fly method.

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
 
  fly() {
    return "Flying!";
  }
}
Let's create a flying dog called Daisy, and let her bark and fly!

index.js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Woof!");
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`Flying!`);
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();
Open CodeSandbox

We have access to the bark method, as we extended the Dog class. The value of __proto__ on the prototype of SuperDog points to the Dog.prototype object!

Flow
It gets clear why it's called a prototype chain: when we try to access a property that's not directly available on the object, JavaScript recursively walks down all the objects that __proto__ points to, until it finds the property!

Object.create
The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype.

const dog = {
  bark() {
    return `Woof!`;
  },
};
 
const pet1 = Object.create(dog);
Although pet1 itself doesn't have any properties, it does have access to properties on its prototype chain! Since we passed the dog object as pet1's prototype, we can access the bark property.

index.js
const dog = {
  bark() {
    console.log(`Woof!`);
  }
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));


```

### Tradeoffs
```
Memory efficient: The prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.

```
### Issue
```
Readaibility: When a class has been extended many times, it can be difficult to know where certain properties come from.

For example, if we have a BorderCollie class that extends all the way to the Animal class, it can be difficult to trace back where certain properties came from.

![Alt text](image https://javascriptpatterns.vercel.app/design-patterns/prototype-pattern/2.png)


```