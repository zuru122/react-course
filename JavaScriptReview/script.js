const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring
for (let i = 0; i <= data.length; i++) {
  const book1 = getBook(i);

  if (!book1) continue; // skip if undefined

  const { title, author, pages, publicationDate, genres = [] } = book1;
  const [primaryGenre] = genres;

  const bookInfo1 = `${title}, a ${primaryGenre} novel authored by ${author}, was published on ${publicationDate}. It has ${pages} pages.`;

  console.log(bookInfo1);
}

const book = getBook(1);
const { title, author, pages, publicationDate, genres, hasMoviesAdaptation } =
  book;
console.log(book);
console.log(title, author, genres);

const [primaryGenre, secondaryGenre, ...others] = genres;
console.log(primaryGenre, secondaryGenre, others);

const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
updatedBook;

// template literals
const bookInfo = `${title}, a ${primaryGenre} novel authored by ${author}, was published on ${publicationDate}. It has ${pages} pages.`;
console.log(bookInfo);

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));
*/

const books = getBooks();
books;

// mapping to get an array of book titles
const titles = books.map((book) => book.title);

titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;

// filtering books with more than 500 pages
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooksWithMovie;

// combining the filter and map methods
const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// reducing to get the total number of pages of all books
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// sort method
const x = [3, 7, 1, 9, 6];
// sorted in ascending order
const sortedX = x.slice().sort((a, b) => a - b);
sortedX;
x;

const booksSortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
booksSortedByPages;

// Immutable array

// 1 Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber Secrets",
  author: "J. K. Rowling",
};

const updatedBooks = [...books, newBook];
updatedBooks;

// 2 Remove book object from array
const booksAfterDelete = updatedBooks.filter((book) => book.id !== 3);
booksAfterDelete;

// 3 Update book object in array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 2 ? { ...book, pages: 320 } : book
);
booksAfterUpdate;

// Mutable array operations

// 1 Add book object to array
books.push(newBook);
books;

// 2 Remove book object from array
const index = books.findIndex((book) => book.id === 3);
books.splice(index, 1);
books;

// 3 Update book object in array
const bookToUpdate = books.find((book) => book.id === 2);
bookToUpdate.pages = 320;
books;

// Async operations with Promises and async/await
/*
await fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
  response.json().then((json) => console.log(json))
);
*/

// console.log("Jonas");

// Async/await

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

await fetchTodos();

console.log("Jonas");
