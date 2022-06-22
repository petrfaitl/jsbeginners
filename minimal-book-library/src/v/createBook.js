'use strict';
// console.log(pl);
pl.v.createBook = {
    setupUserInterface: function () {
        const saveBtn = document.querySelector('button[name="addBook"]');
        Book.retrieveAll();

        saveBtn.addEventListener('click', pl.v.createBook.handleSaveBtnClickEvent);

    },

    handleSaveBtnClickEvent(e) {
        e.preventDefault();
        const formEl = document.querySelector('form[id="Book"]');
        const book = {
            title: formEl.title.value,
            isbn: formEl.isbn.value,
            year: formEl.year.value
        };
        Book.addBook(book);
        formEl.reset();
    }
}