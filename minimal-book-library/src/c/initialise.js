'use strict';

// Defining a namespace; pl = Public Library
const pl = { m: {}, v: {}, c: {} };

const headerContainer = document.querySelector('#headerContainer');
const footerContainer = document.querySelector('#footerContainer');

const loadHeader = async function () {
    try {
        const response = await fetch('assets/header.html');

        headerContainer.innerHTML = await response.text();
        highlightActivePage();

    } catch (e) {
        console.log(e)
    }
}
const loadFooter = async function () {
    try {
        const response = await fetch('assets/footer.html');
        // console.log(response);

        footerContainer.innerHTML = await response.text();
    } catch (e) {
        console.log(e)
    }
}

const highlightActivePage = function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const activePage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (activePage === linkHref) {
            // link.classList.remove('text-white');
            link.classList.add('active');
        }

    })
}

loadHeader();
loadFooter();