let counter =0;
let instance = null;

class CounterSingleton {
    constructor(){
        if(instance){
            throw new Error("You can only create one instance!");
        }
        instance= this // set instance equal to a reference to the instance when a new instance is created.
    }
    getInstance(){
        return this
    }

    getCounterValue(){
        return counter;
    }

    increaseCounter(){
        counter++;
    }

    decreaseCounter(){
        counter--
    }
}
/*
const counter1 = new CounterSingleton();
counter1.increaseCounter()
counter1.decreaseCounter()
console.log(counter1.getCounterValue());
console.log(counter);

const counter2 = new CounterSingleton();
console.log(counter2.getCounterValue()) // Error: You can only create one instance!

*/


// Object.freeze method makes sure that consuming code cannot modify the Singleton

const singletonCounter = Object.freeze(new CounterSingleton())

export default Object.freeze(singletonCounter)