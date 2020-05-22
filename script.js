let counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');

let count = 0;

lowerCount.addEventListener('click', decrementCounter);
addCount.addEventListener('click', incrementCounter);

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < 0){
        counter.style.color = 'red'
    } else if(counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{opacity: '0.4'}, {opacity: '1'}], {duration: 700, fill:'forwards'});
}

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = '#4caf50';
    } else if(counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{opacity: '0.4'}, {opacity: '1'}], {duration: 700, fill:'forwards'});
}
