'use strict';

const display = document.querySelector('#counter');
const lowerBtn = document.querySelector('.prevBtn');
const addBtn = document.querySelector('.nextBtn');

let count = 0;
const counter = (val) => {
    return function () {
        count += val;
        display.textContent = count;
        if (count < 0) {
            display.classList.remove('positive');
            display.classList.add('negative');
        }else if(count>0){
            display.classList.add('positive');
            display.classList.remove('negative');
        }else{
            display.classList.remove('positive');
            display.classList.remove('negative');
        }
    }
}

const add1 = counter(1);
const subtract1 = counter(-1);
addBtn.addEventListener('click', add1);
lowerBtn.addEventListener('click', subtract1);

