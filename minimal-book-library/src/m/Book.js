'use strict';

class Book {
    instances = {};

    constructor(slots) {
        this.isbn = slots.isbn;
        this.title = slots.title;
        this.year = slots.year;
    }

    addBook(slots) {
        this.instances[slots.isbn] = new Book(slots);
        console.log(`Book ${slots.title} added.`)
    }

    retrieveAll() {
        let booksString = '';
        try {
            if (localStorage.getItem('books')) {
                booksString = localStorage.getItem('books');
            }
        } catch (e) {
            console.log(e.message);
        }
        if (booksString) {
            const books = JSON.parse(booksString);
            const keys = Object.keys(books);
            console.log(`${keys.length} books loaded.`)
            keys.forEach(bookKey => {
                this.instances[bookKey] = this._convertRec2Book(books.key);
            })
        }

    }

    _convertRec2Book(bookRec) {
        return new Book(bookRec);
    }

}