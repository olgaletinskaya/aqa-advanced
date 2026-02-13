const numbers = [4, -2, 0, 9, -7, 0, 15, -1];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
