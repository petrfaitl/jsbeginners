'use strict';

pl.v.deleteBook = {
    setupUserInterface() {
        const deleteBookForm = document.forms['deleteBookForm'];
        const deleteBtn = deleteBookForm.deleteBook;
        Book.retrieveAll();
        const keys = Object.keys(Book.bookRecords);
        const selectEl = deleteBookForm.selectBook;
        keys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.text = Book.bookRecords[key].title;
            selectEl.add(option);

        });

        selectEl.addEventListener('change', this.handleBookSelectionEvent);
        deleteBtn.addEventListener('click', this.handleDeleteBtnClickEvent);

    },

    handleBookSelectionEvent() {
        const deleteBookForm = document.forms['deleteBookForm'];
        const selectEl = deleteBookForm.selectBook;
        const key = selectEl.value;
        const book = Book.bookRecords[key];
        deleteBookForm.isbn.value = book.isbn;
    },

    handleDeleteBtnClickEvent(e) {
        e.preventDefault();
        const deleteBookForm = document.forms['deleteBookForm'];

        const selectEl = deleteBookForm.selectBook;
        const key = deleteBookForm.isbn.value;
        if (!key) return;
        if (window.confirm(`Do you really want to delete ${Book.bookRecords[key].title} from records?`)) {
            Book.destroy(key);
            selectEl.options[selectEl.selectedIndex].remove();
            deleteBookForm.reset();
        }
    }

}