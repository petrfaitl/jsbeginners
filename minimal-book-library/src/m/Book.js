'use strict';

class Book {
    static bookRecords = {};

    constructor(record) {
        this.isbn = record.isbn;
        this.title = record.title;
        this.year = record.year;
    }

    static saveAll() {
        try {
            if (this.bookRecords) {
                const allRecords = JSON.stringify(this.bookRecords);
                localStorage.setItem('books', allRecords);
            }
        } catch (e) {
            console.log(`Error when writing to Local storage ${e.message}`);
        }
    }

    static retrieveAll() {
        let booksString;
        try {
            if (localStorage.getItem('books')) {
                booksString = localStorage.getItem('books');
            }
        } catch (e) {
            console.log(e.message);
        }
        if (!booksString || booksString === 'undefined') return false;
        if (booksString) {
            // console.log("Book string", booksString);
            const books = JSON.parse(booksString);
            const keys = Object.keys(books);
            console.log(`${keys.length} books loaded.`)
            keys.forEach(bookKey => {
                this.bookRecords[bookKey] = this._convertRec2Book(books[bookKey]);
            });
            // console.log(this.bookRecords);
        }

    }

    static createTestData() {
        if (window.confirm("Confirm to generate library test data?")) {
            this.bookRecords['006251587X'] = new Book({
                isbn: "006251587X",
                title: "Weaving the Web",
                year: 2000
            });
            this.bookRecords['0465026567'] = new Book({
                isbn: "0465026567",
                title: "Gödel, Escher, Bach",
                year: 1999
            });
            this.bookRecords['0465030793'] = new Book({
                isbn: "0465030793",
                title: "I Am A Strange Loop",
                year: 2008
            });
            this.saveAll();
            location.reload();
        }
    }

    static clearData() {
        if (window.confirm("Do you really want to delete all records?")) {
            this.bookRecords = {};
            this.saveAll();
            location.reload();
        }
    }

    static addBook(record) {
        this.bookRecords[record.isbn] = new Book(record);
        console.log(`Book ${record.title} added.`)
        this.saveAll();
    }

    static update(record) {
        const book = this.bookRecords[record.isbn];
        if (!book) return;
        book.title = book.title === record.title ? book.title : record.title;
        book.year = book.year === record.year ? book.year : record.year;
        console.log(`Book ${book.title} has been updated.`);
        this.saveAll();
    }

    static destroy(isbn) {
        if (this.bookRecords[isbn]) {
            console.log(`${this.bookRecords[isbn].title} has been deleted`);
            delete this.bookRecords[isbn];
            this.saveAll();
        }

    }

    static _convertRec2Book(bookRec) {
        return new Book(bookRec);
    }

}