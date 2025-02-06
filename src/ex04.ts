// Exercise: Create a function `formatInput` that accepts either a string or number as input.
// If it's a number, return it multiplied by 100. If it's a string, return it in uppercase.

type Input = string | number;

function formatInput(input: Input): string | number {
  if (typeof input === "number") {
    return input * 100;
  } else {
    return input.toUpperCase();
  }
}

console.log(formatInput(5));    // Expected output: 500
console.log(formatInput("hello")); // Expected output: "HELLO"