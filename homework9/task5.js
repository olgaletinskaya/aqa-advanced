const users = [
  { name: "Alex", email: "alex@test.com", age: 28 },
  { name: "Maria", email: "maria@test.com", age: 32 },
  { name: "John", email: "john@test.com", age: 40 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
