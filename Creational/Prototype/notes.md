### Prototype Pattern
## Share properties among many objects of the same type
```
The prototype is an object that's native to JavaScript,
                        and can be accessed by objects 
                                                through the prototype chain.
```
```
The value of __proto__ on any instance of the constructor, is a direct reference to the constructor's prototype!
 Whenever we try to access a property on an object that doesn't exist on the object directly,
JavaScript will go down the prototype chain to see if the property is available within the prototype chain.
```
![Alt text](image https://www.patterns.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1609056524%2Fpatterns.dev%2FScreen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png&w=3840&q=75)


```
 Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.

 Since all instances have access to the prototype, it's easy to add properties to the prototype even after creating the instances.

```
### Prototype chain
```
The term prototype chain indicates that there could be more than one step.
Indeed! So far, we've only seen how we can access properties that are directly available on the first object that __proto__ has a reference to.
However, prototypes themselves also have a __proto__ object!

![Alt text](image https://www.patterns.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1609056523%2Fpatterns.dev%2FScreen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png&w=3840&q=75)

It gets clear why it's called a prototype chain: when we try to access a property that's not directly available on the object,
JavaScript recursively walks down all the objects that __proto__ points to, until it finds the property!

```

### Object.create
```
Object.create is a simple way to let objects directly inherit properties from other objects, by specifying the newly created object's prototype.
The new object can access the new properties by walking down the prototype chain.

```
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
