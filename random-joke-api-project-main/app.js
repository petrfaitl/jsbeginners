'use strict';

const chuckAPI = "https://api.chucknorris.io/jokes/random";
const btnGetJoke = document.querySelector('#get-joke');
const jokeEl = document.querySelector('#display-joke');
const logo = document.querySelector('#logo')
const getChuckJoke = async function (){
    try {
        const response = await fetch(chuckAPI);
        const joke = await response.json();
        jokeEl.textContent = joke.value;

    }catch (e) {
        jokeEl.textContent = "e.message";
        console.log(e.message);

    }
}

btnGetJoke.addEventListener('click', getChuckJoke);
