// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.

function logValues(values: any[]): void {
  values.forEach(value => {
    if (typeof value === "object") {
      value = JSON.stringify(value);
      console.log(`${value} (object)`);
    } else {
      console.log(`${value} (${typeof value})`);
    }
  });
}

logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)