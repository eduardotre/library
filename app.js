let myLibrary = []; //empty array

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.libNum = 0;

    this.info =  () => {
        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
    }
    this.toggleRead = () => {
        if (this.read == 'yes'){
            this.read = 'no';
        }
        else{
            this.read = 'yes';
        }
    }
}
function createForm(){
    if (!document.querySelector('form')){  //prevents it from creating another form if one already exists
        const form = document.createElement('form');
        form.setAttribute('class','bookForm')
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
        bookPagesInput.setAttribute('type','number');
        bookPagesInput.setAttribute('min',0);
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
    }
    else{
        //do nothing
    }
}
function addBookToLibrary(e){
    e.preventDefault(); //do not submit form

    let book = new Book();

    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('numPages').value;
    if (document.getElementById('read').checked == true){
        book.read = 'yes';
    }
    else book.read = 'no';

    book.libNum = myLibrary.length;
    myLibrary.push(book);
    
    //moved into displayCard funcion
    /*if(document.querySelectorAll('.card')){
        const cards = document.querySelectorAll('.card');
        for (const card of cards){
            card.parentNode.removeChild(card);
        }
        const spaces = document.querySelectorAll('.space');
        for (const space of spaces){
            space.parentNode.removeChild(space);
        }
        displayCards();
    }
    else{
        displayCards();
    }*/
    displayCards();
    document.querySelector('form').remove();

}
function displayCards(){
    if(document.querySelectorAll('.card')){
        const cards = document.querySelectorAll('.card');
        for (const card of cards){
            card.parentNode.removeChild(card);
        }
        const spaces = document.querySelectorAll('.space');
        for (const space of spaces){
            space.parentNode.removeChild(space);
        }
    }

    const space = document.createElement('div');
    space.setAttribute('class','space')
    container.appendChild(space);
    const space2 = document.createElement('div');
    space2.setAttribute('class','space');
    container.appendChild(space2);
    
    for (book of myLibrary){
        const card = document.createElement('div');
        const list = document.createElement('ul');
        card.appendChild(list);
        card.setAttribute('class','card')
        
        const bTitle = document.createElement('li');
        list.appendChild(bTitle);
        bTitle.textContent = `Title: ${book.title}`;
        
        const bAuthor = document.createElement('li');
        list.appendChild(bAuthor);
        bAuthor.textContent = `Author: ${book.author}`;
        
        const bNumPages = document.createElement('li');
        list.appendChild(bNumPages);
        bNumPages.textContent = `# of Pages: ${book.pages}`;
        
        const bRead = document.createElement('li');
        list.appendChild(bRead);
        bRead.textContent = `Read? `;
        const toggler = document.createElement('input');
        toggler.type = 'checkbox'
        if (book.read == 'yes'){
            toggler.checked = true;
        }
        else{
            toggler.checked =false;
        }
        bRead.appendChild(toggler);
        toggler.addEventListener('click', (e)=> {
            book.toggleRead()
        });

        card.setAttribute('id',`card${book.libNum}`)
        const remove = document.createElement('button');
        list.appendChild(remove);
        remove.textContent = 'Delete';
        const index = book.libNum;
        remove.addEventListener('click',(e) =>{
            deleteBook(index)});

        container.appendChild(card);
    }
}
function deleteBook(index){
    const cardToDelete = document.getElementById(`card${index}`);
    cardToDelete.parentNode.removeChild(cardToDelete);
    console.log(index);
    myLibrary.splice(index,1);
    while(index < myLibrary.length){
        myLibrary[index].libNum = index;
        index+=1;
    }
    displayCards();
}

const container = document.querySelector('.container');
console.log(container);

const createFormbtn = document.createElement('button');
createFormbtn.setAttribute('class', 'createBtn')
createFormbtn.textContent = 'New Book';
container.appendChild(createFormbtn);
createFormbtn.addEventListener('click',createForm);

//for testing purposes
/*let book1 = new Book();
book1.author = 'ed';
let book2 = new Book();
book2.author = '2';
myLibrary.push(book1);
myLibrary.push(book2);*/