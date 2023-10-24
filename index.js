let library = [
  { title: "Harry Potter", author: "J.K. Rowling", readStatus: false },
  { title: "The Hobbit", author: "J.R.R. Tolkien", readStatus: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", readStatus: true },
  { title: "1984", author: "George Orwell", readStatus: false },
  { title: "Pride and Prejudice", author: "Jane Austen", readStatus: false },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    readStatus: true,
  },
  { title: "Moby Dick", author: "Herman Melville", readStatus: false },
  { title: "War and Peace", author: "Leo Tolstoy", readStatus: true },
  { title: "Brave New World", author: "Aldous Huxley", readStatus: true },
  { title: "Ulysses", author: "James Joyce", readStatus: false },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    readStatus: false,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    readStatus: true,
  },
];
// ● Add a Book: Create a function addBook(title, author) that allows
// users to add a book. Ensure that the same book (by title and author)
// cannot be added more than once.
// ● Bonus Challenges:
// ○ Extend the addBook function to also accept and store a
// book's genre and publish date.
function addBook(title, author, published, genre) {
  let index = library.findIndex((book) => book.title == title); // if it finds one exist so it will save a normal number, then i will use it, if not -1 but i won't use it
  const newBook = {
    title: title,
    author: author,
    published_year: published,
    genre: genre,
  };
  let hasBeenAdded =
    library.find((book) => book.title == title) &&
    library.find((book) => book.author == author);
  !hasBeenAdded ? library.push(newBook) : (library[index] = newBook);
  console.log(library);
}
// addBook("The Catcher in the Rye","J.D. Salinger" , 1951 , 'Novel') // exist book
// addBook("The Lord of the Rings","Tolkien" , 1954 , 'Fantasy fiction') // new book

// ● List All Books: Create a function listBooks() that displays all the
// books in the library..
function listBooks() {
  return library.map((book) => {
    return book;
  });
}
// console.log(listBooks());

// ● Mark a Book as Read: Create a function markAsRead(title) that
// updates the read status of a book to true.
function markAsRead(title) {
  return listBooks().find((book) => {
    if (book.title === title) {
      book.readStatus = true;
      console.log(book);
    }
  });
}
// markAsRead("Crime and Punishment")

// ● Delete a Book: Create a function deleteBook(title) that removes a
// book from the library.
function deleteBook(title) {
  const index = library.findIndex((book) => book.title === title);
  library.splice(index, 1);
  console.log(library);
}

// deleteBook("Crime and Punishment")

// ● Find a Book: Create a function findBook(query) that lets users
// search for a book by title or author.
function findBook(query) {
  return library.find(
    (book) => book.title == book.title && book.author == query.author
  );
}
// console.log(
//   findBook({ title: "Crime and Punishment", author: "Fyodor Dostoevsky" })
// );

// ● Sort Books Alphabetically: Create a function sortBooks() that
// displays all books sorted alphabetically by their title.
function sortBooks() {
  return library.sort((a, b) => (a.title > b.title ? 1 : -1));
}
// console.log(sortBooks())

// ● List Unique Authors: Create a function uniqueAuthors() that lists
// all unique authors in the library.

function uniqueAuthors() {
  let authorList = [];
  library.map((book) => {
    if (!authorList.includes(book.author)) {
      authorList.push(book.author);
    }
  });
  return authorList;
}
// console.log(uniqueAuthors());

// ● Books Count by Author: Create a function
// booksByAuthor(authorName) that returns the number of books written
// by a specific author.
function booksByAuthor(authorName) {
  return library.filter((book) => book.author == authorName).length;
}
// console.log(booksByAuthor('Leo Tolstoy'))

// ● Filter Books by Read Status: Create a function
// filterByReadStatus(status) that lists all books either read or not read,
// based on the provided status.
function filterByReadStatus(status) {
  let read = status == "read" ? true : status == "not read" ? false : status;
  return library.filter((book) => book.readStatus == read);
}
// console.log(filterByReadStatus(true));
// console.log(filterByReadStatus('not read'));

// ● Find Books with Titles Longer Than X Characters: Create a
// function longTitleBooks(charCount) that finds all books with titles longer
// than the provided character count.
function longTitleBooks(charCount) {
  return library.filter((book) => book.title.length > charCount);
}
// console.log(longTitleBooks(10));

// ● Bonus Challenges:
// ○ Extend the addBook function to also accept and store a
// book's genre and publish date.
// V

// ○ Create a function listUnreadBooks() to display only the books
// that haven't been read.
function listUnreadBooks() {
  return library.filter((book) => book.readStatus == false);
}
// console.log(listUnreadBooks());

// ○ Implement a toggleReadStatus(title) function that toggles the
// read status of a book
function toggleReadStatus(title) {
  const book = library.find((book) => book.title == title);
  book.readStatus = !book.readStatus;
  return book;
}
// console.log(toggleReadStatus("Crime and Punishment"));
