'use strict';

const headerContainer = document.querySelector('#headerContainer');
const footerContainer = document.querySelector('#footerContainer');

const loadHeader = async function () {
    try {
        const response = await fetch('assets/header.html');
        const header = await response.text();

        headerContainer.insertAdjacentHTML('afterbegin', header);
    } catch (e) {
        console.log(e)
    }
}
const loadFooter = async function () {
    try {
        const response = await fetch('assets/footer.html');
        const footer = await response.text();

        footerContainer.insertAdjacentHTML('beforeend', footer);
    } catch (e) {
        console.log(e)
    }
}
loadHeader();
loadFooter();