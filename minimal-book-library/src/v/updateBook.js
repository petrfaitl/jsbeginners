'use strict';

pl.v.updateBook = {
    setupUserInterface() {
        // Get form El from HTML
        const bookUpdateFormEl = document.querySelector('form#updateBookForm');
        const selectEl = bookUpdateFormEl.selectBook;
        const updateBtn = bookUpdateFormEl.updateBook;
        // Retrieve all records from Local Storage
        Book.retrieveAll();
        const keys = Object.keys(Book.bookRecords);
        // Create a select List and populate it with existing records
        keys.forEach(key => {
            const option = document.createElement('option');
            const book = Book.bookRecords[key];
            option.value = key;
            option.textContent = book.title;
            selectEl.add(option);
        })

        // Register listeners
        // 1. for onchange of selections
        selectEl.addEventListener('change', this.handleBookSelectionEvent);
        // 2. click on Save button - update Book
        updateBtn.addEventListener('click', this.handleUpdateBtnClickEvent);
    },

    handleBookSelectionEvent() {
        const bookUpdateFormEl = document.querySelector('form#updateBookForm');
        const selectEl = bookUpdateFormEl.selectBook;
        const keys = Object.keys(Book.bookRecords);
        const selectedOptionKey = selectEl.value;
        if (keys.includes(selectedOptionKey)) {
            const book = Book.bookRecords[selectedOptionKey];
            bookUpdateFormEl.isbn.value = book.isbn;
            bookUpdateFormEl.title.value = book.title;
            bookUpdateFormEl.year.value = book.year;
        } else {
            bookUpdateFormEl.reset();
        }

    }, handleUpdateBtnClickEvent(e) {
        e.preventDefault();
        const bookUpdateFormEl = document.querySelector('form#updateBookForm');
        const selectEl = bookUpdateFormEl.selectBook;
        Book.update({
            isbn: bookUpdateFormEl.isbn.value,
            title: bookUpdateFormEl.title.value,
            year: bookUpdateFormEl.year.value
        });
        selectEl.options[selectEl.selectedIndex].text = bookUpdateFormEl.title.value;
        Book.saveAll();
        bookUpdateFormEl.reset();
    }
}