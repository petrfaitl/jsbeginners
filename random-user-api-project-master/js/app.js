'use strict';


const userAllInfoUrl = 'https://randomuser.me/api/?nat=nz,gb';

const labelFirstName = document.querySelector('#first');
const labelLastName = document.querySelector('#last');
const LabelStreet = document.querySelector('#street');
const labelPhone = document.querySelector('#phone');
const labelEmail = document.querySelector('#email');
const userPic = document.querySelector('#photo');

const btnGenerate = document.querySelector('#btn');

const renderUser = function (userData) {
    const {
        name: {first, last},
        location: {street: {name: streetName}, city},
        email,
        phone,
        picture: {large: userPicLarge}
    } = userData;
    labelFirstName.textContent = first;
    labelLastName.textContent = last;
    LabelStreet.textContent = `${streetName}, ${city}`;
    labelPhone.textContent = phone;
    labelEmail.textContent = email;
    userPic.src = userPicLarge;


}

const fetchUserData = async function () {
    try {
        const response = await fetch(userAllInfoUrl);
        const {results: [data]} = await response.json();
        renderUser(data);
    } catch (e) {
        console.log(e.message);

    }
}
btnGenerate.addEventListener('click', fetchUserData);
window.addEventListener('load', fetchUserData)
