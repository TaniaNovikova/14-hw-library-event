const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');
const library = [];


addBook.onclick = function () {
    //TODO Homework Collect data from inputs,
    // create new book and add new book to library if this book unique
    let isbn = document.getElementById("isbn").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;

    let book = new Book(isbn, title, author, year);
    if (findBook(library, isbn) < 0) {
        library.push(book);
        document.getElementById("isbn").value = "";
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
    }
}

printBooks.onclick = function () {
    //TODO create ordered list, add all books from libriry
    // to list as list items. and add list to div with id = result.
    // if div with id = result not emplty, then replace its child
    // Hint: see Clock application

    for (let i = 0; i < library.length; i++) {
        let book = document.createElement("li");
        book.innerHTML = `${library[i].toString()}`
        document.getElementById("booksList").appendChild(book);
    }
}



function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}
