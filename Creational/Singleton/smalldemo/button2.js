import Counter from '../SingletonClass';

const button2 = document.getElementById('button2');
button2.addEventListener('click',()=>{
    Counter.increaseCounter();
    console.log(Counter.getCounterValue())
})