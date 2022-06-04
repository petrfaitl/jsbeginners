'use strict';

const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const hexValue = document.querySelector('#hex-value');

btn.addEventListener('click',  ()=> {

    const arr = new Array(3).fill(1);
    const hex = arr.map(() => Math.floor(Math.random() * 255).toString(16));
    body.style.backgroundColor = `#${hex[0]}${hex[1]}${hex[2]}`;
    hexValue.textContent = `#${hex.join('')}`;
});