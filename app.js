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

function addBookToLibrary(e){
    e.preventDefault(); //do not submit form

    let book = new Book();

    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('numPages').value;
    book.read = document.getElementById('read').value;
    myLibrary.push(book);

    document.querySelector('form').reset();

}

const container = document.querySelector('.container');
console.log(container);

const form = document.createElement('form');
form.classList.add('form');
container.appendChild(form);

const bookTitleLabel = document.createElement('label');
bookTitleLabel.textContent = "Book Title ";
form.appendChild(bookTitleLabel);

const bookTitleInput = document.createElement('input');
bookTitleInput.type = 'text';
bookTitleInput.setAttribute('id', 'title');
form.appendChild(bookTitleInput);

const bookAuthorLabel = document.createElement('label');
bookAuthorLabel.textContent = "Author ";
form.appendChild(bookAuthorLabel);

const bookAuthorInput = document.createElement('input');
bookAuthorInput.type = 'text';
bookAuthorInput.setAttribute('id', 'author');
form.appendChild(bookAuthorInput);

const bookPagesLabel = document.createElement('label');
bookPagesLabel.textContent = "# of pages ";
form.appendChild(bookPagesLabel);

const bookPagesInput = document.createElement('input');
bookPagesInput.type = 'text';
bookPagesInput.setAttribute('id', 'numPages');
form.appendChild(bookPagesInput);

const bookReadLabel = document.createElement('label');
bookReadLabel.textContent = "Finished reading? ";
form.appendChild(bookReadLabel);

const bookReadInput = document.createElement('input');
bookReadInput.type = 'checkbox';
bookReadInput.setAttribute('id', 'read');
form.appendChild(bookReadInput);

const submitNewBook = document.createElement('button');
//submitNewBook.type = 'submit';
submitNewBook.textContent = "Add book";
form.appendChild(submitNewBook);
submitNewBook.addEventListener('click', addBookToLibrary);

