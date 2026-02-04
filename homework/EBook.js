const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  // Геттер и сеттер для формата
  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (!value) {
      throw new Error("File format is required");
    }
    this._fileFormat = value;
  }

  // Переопределяем printInfo
  printInfo() {
    console.log(`${this.title} - ${this.author} (${this.year}) [${this.fileFormat}]`);
  }

  // Статический метод для создания EBook из Book
  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}

module.exports = EBook;
