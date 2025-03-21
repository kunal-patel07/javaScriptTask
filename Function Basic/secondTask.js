//: Implement a higher-order function that takes a function and returns a new function that logs its input and output

function loggedInput(fn) {
  return function (...args) {
    console.log("input", args);
    let result = fn(...args);
    console.log("output", result);
    return result;
  };
}

let sum = (a, b) => {
  return a + b;
};
let trackIt = loggedInput(sum);
console.log(trackIt(12, 12));
