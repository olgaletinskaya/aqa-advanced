function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(25)); // true
console.log(isAdult(15)); // false
