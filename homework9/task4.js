const person = {
  firstName: "Anna",
  lastName: "Ivanova",
  age: 25,
};

// Добавляем email
person.email = "anna.ivanova@example.com";

// Удаляем age
delete person.age;

console.log(person);
