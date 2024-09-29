class Library {
  constructor() {
    this.books = [];
    this.currentId = 1;
  }

  addBook(book) {
    book.id = this.currentId++;
    this.books.push(book);
  }

  update(id, updates) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updates };
      return true;
    }
    return false;
  }

  deleteByTitle(title) {
    this.books = this.books.filter((b) => b.title !== title);
  }

  search(term) {
    return this.books.filter((b) => b.title.includes(term));
  }

  getAllBooks() {
    return this.books;
  }
}

window.Library = Library;
