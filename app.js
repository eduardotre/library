let myLibrary = []; //empty array

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info =  () => {
        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
    }
}

function addBookToLibrary(){
    let book = new Book();

    const properties = Object.keys(book).filter(property => property != "info");
    console.log(properties);

    // loop works but I am too lazy to put if statements in the prompt
    /* for (property of properties){  
        console.log(property);
        book[property] = prompt(`What is ${property}?`);
    } */
    book.title = prompt("What is the book title?");
    book.author = prompt("What is the book author?");
    book.pages = prompt("What is the book's amount of pages?");
    book.read = prompt("Have you read this book?");

    myLibrary.push(book);
}

const container = document.querySelector('.container');
console.log(container);

const form = document.createElement('form');
form.classList.add('form');
container.appendChild(form);

const input = document.createElement('input');
input.type = 'text';

form.appendChild(input);
