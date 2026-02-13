class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Геттеры
  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  // Сеттеры с валидацией
  set title(value) {
    if (!value) {
      throw new Error("Title is required");
    }
    this._title = value;
  }

  set author(value) {
    if (!value) {
      throw new Error("Author is required");
    }
    this._author = value;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Invalid year");
    }
    this._year = value;
  }

  // Метод для вывода информации
  printInfo() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
  }

  // Статический метод для поиска самой старой книги
  static findOldestBook(books) {
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest
    );
  }
}

module.exports = Book;
