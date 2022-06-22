'use strict';

pl.v.retrieveAndListAllBooks = {
    setupUserInterface() {
        const bookTableElBody = document.querySelector('table#table-books>tbody');
        Book.retrieveAll();
        const keys = Object.keys(Book.bookRecords);
        keys.forEach((key, idx) => {
            const book = Book.bookRecords[key];
            const content = `
            <tr>
            <th scope="row">${idx + 1}</th>
            <td>${book.title}</td>
            <td>${book.year}</td>
            <td>${book.isbn}</td>
        </tr>
            `;
            const row = bookTableElBody.insertRow();
            row.insertAdjacentHTML('afterbegin', content)
        })
        const footer = `
        <tfoot class="table-light">
    <tr>
      <td></td>
      <td colspan="2"><strong>Total Records</strong></td>
      <td ><strong>${keys.length}</strong></td>
    </tr>
  </tfoot>
        `;
        bookTableElBody.insertAdjacentHTML('afterend', footer);

    }
}