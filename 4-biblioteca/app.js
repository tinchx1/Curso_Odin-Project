const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function openForm() {
    // Muestra el formulario al hacer clic en el botón
    document.getElementById('bookForm').style.display = 'block';
}

// ...

function addBook(event) {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();

    // Obtén los valores del formulario
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    // Crea un nuevo objeto Book
    const newBook = new Book(title, author, pages, read);

    // Agrega el nuevo libro a la matriz myLibrary
    myLibrary.push(newBook);

    // Oculta el formulario después de agregar el libro
    document.getElementById('bookForm').style.display = 'none';

    // Limpia los campos del formulario
    document.getElementById('addBookForm').reset();

    document.getElementById('libraryContainer').style.display = 'flex';

    // Muestra la biblioteca actualizada
    displayLibrary();

    // Puedes imprimir la colección en la consola para verificar
    console.log(myLibrary);
}
function cancelAddBook() {
    // Muestra las tarjetas al cancelar o cerrar el formulario
    document.getElementById('libraryContainer').style.display = 'flex';

    // Oculta el formulario al cancelar
    document.getElementById('bookForm').style.display = 'none';

    // Limpia los campos del formulario
    document.getElementById('addBookForm').reset();
}

// ...
function openForm() {
    // Oculta las tarjetas al hacer clic en el botón "Agregar Libro"
    document.getElementById('libraryContainer').style.display = 'none';

    // Muestra el formulario al hacer clic en el botón
    document.getElementById('bookForm').style.display = 'block';
}

// ...

function removeBook(index) {
    // Elimina el libro de la matriz myLibrary según el índice
    myLibrary.splice(index, 1);

    // Vuelve a mostrar la biblioteca actualizada
    displayLibrary();

    // Puedes imprimir la colección en la consola para verificar
    console.log(myLibrary);
}

// ...

function displayLibrary() {
    const libraryContainer = document.getElementById('libraryContainer');

    // Limpiar el contenedor antes de volver a mostrar los libros
    libraryContainer.innerHTML = '';

    // Iterar sobre la matriz y agregar tarjetas al contenedor
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('bookCard');
        card.innerHTML = `<p><strong>Título:</strong> ${book.title}</p><p><strong>Autor:</strong> ${book.author}</p><p><strong>Páginas:</strong> ${book.pages}</p><p><strong>Leído:</strong> ${book.read ? 'Sí' : 'No'}</p><button onclick="toggleReadStatus(${index})">Cambiar Estado</button> <button onclick="removeBook(${index})">Eliminar</button>`;
        libraryContainer.appendChild(card);
    });
}

function toggleReadStatus(index) {
    // Cambiar el estado leído del libro en la matriz
    myLibrary[index].read = !myLibrary[index].read;

    // Volver a mostrar la biblioteca actualizada
    displayLibrary();
}


// ...

