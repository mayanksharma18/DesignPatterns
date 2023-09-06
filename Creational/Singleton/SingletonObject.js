/*
class implementation  is actually overkill. 
Since we can directly create objects in JavaScript, 
we can simply use a regular object to achieve the exact same result.
 */

//property
let count = 0;

const counter = {
    //method
    increment(){
        return ++count;
    },
    //method
    decrement(){
        return --count
    }
}

Object.freeze(counter)

export { counter }

// Since objects are passed by reference

// import of counter object  anywhere and calling increment or decrement will modify the value of the count.