import { Books } from "./Book.js";
import * as fs from "fs";

export class Library {
  private books: Books[] = [];
  private id: number = 1;

  addBook(book: Omit<Books, "id">): Books {
    const new_Book = { ...book, id: this.id++ };
    this.books.push(new_Book);
    return new_Book;
  }

  allBook(): void {
    this.books.forEach((book) => console.log(book));
  }

  search<K extends keyof Books>(value: Books[K]): Books[] {
    return this.books.filter((book) => book["title"] === value);
  }

  update(id: number, updates: Partial<Omit<Books, "id">>): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updates };
    }
  }

  delete(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }

  save(filename: string): void {
    fs.writeFileSync(filename, JSON.stringify(this.books, null, 2));
    console.log(`Books saved to ${filename}`);
  }

  load(filename: string): void {
    if (fs.existsSync(filename)) {
      const data = fs.readFileSync(filename, "utf8");
      this.books = JSON.parse(data);
      console.log(`Books loaded from ${filename}`);
    } else {
      console.log(`File ${filename} does not exist.`);
    }
  }
}
