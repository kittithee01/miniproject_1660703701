import { Library } from "./Library";
import { Genre } from "./Book";

const myLib = new Library();

myLib.addBook({
  title: "Book1",
  author: "A",
  genre: Genre.Fiction,
  publishedYear: 2020,
  available: true,
});
myLib.addBook({
  title: "Book2",
  author: "B",
  genre: Genre.NonFiction,
  publishedYear: 2019,
  available: false,
});

myLib.save("books.json");

const newLibrary = new Library();
newLibrary.load("books.json");

newLibrary.allBook();
