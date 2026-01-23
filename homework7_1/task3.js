function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}

// Примеры вызова с try…catch…finally
const testCases = [
  [10, 2],
  [5, 0],
  ["a", 3]
];

for (const [num, denom] of testCases) {
  try {
    const result = divide(num, denom);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Робота завершена");
  }
}
