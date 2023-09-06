import Counter from '../SingletonClass';

const button = document.getElementById("button1")
button.addEventListener('click', () => {
    Counter.increaseCounter();
    console.log(Counter.getCounterValue())
})