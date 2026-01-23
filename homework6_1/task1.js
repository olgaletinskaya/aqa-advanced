// Function Declaration
function rectangleArea1(width, height) {
  return width * height;
}
console.log(rectangleArea1(5, 10));

// Function Expression
const rectangleArea2 = function(width, height) {
  return width * height;
};
console.log(rectangleArea2(5, 10));

// Arrow Function
const rectangleArea3 = (width, height) => width * height;
console.log(rectangleArea3(5, 10));
