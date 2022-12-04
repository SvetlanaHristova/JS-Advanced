class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (!book) {
            throw new Error("The book, you're looking for, is not found.");
        } else if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books = this.books.filter(x => x.bookName != bookName);
       
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            let book = this.books.find(x => x.bookAuthor == bookAuthor);
            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                let info = book.payed ?
                    "Has Paid"
                    : "Not Paid";
                return `${book.bookName} == ${book.bookAuthor} - ${info}.`;
            }
        } else {
            let res = [];
            this.books.map(x => {
                let info = x.payed ?
                    "Has Paid"
                    : "Not Paid";
                res.push(`${x.bookName} == ${x.bookAuthor} - ${info}.`);
            });
            return `The book collection has ${this.capacity-this.books.length} empty spots left.\n${res.join('\n')}`;
        }
    }
}
/*
const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));
*/
/*
const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));
*/
/*
const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));
*/
/*
 const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
*/
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
