const Book = require("./Book");
const EBook = require("./EBook");

// Создаём обычные книги
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book3 = new Book("Clean Code", "Robert Martin", 2008); // для примера

// Создаём электронные книги
const ebook1 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");
const ebookFromBook = EBook.fromBook(book2, "EPUB");

// Выводим информацию о книгах
book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();
ebookFromBook.printInfo();

// Используем сеттер
book1.year = 1949;

// Массив всех книг
const allBooks = [book1, book2, book3, ebook1, ebookFromBook];

// Находим самую старую книгу
const oldest = Book.findOldestBook(allBooks);
console.log("Найдавніша книга:");
oldest.printInfo();
