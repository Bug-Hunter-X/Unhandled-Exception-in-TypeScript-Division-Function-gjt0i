function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

//Error handling in TypeScript functions
function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

try {
  let result3 = division(10, 0); 
  console.log(result3);
} catch (error) {
  console.error("Error:", error.message);
}

let result4 = division(10,2); // result4 is 5
console.log(result4);