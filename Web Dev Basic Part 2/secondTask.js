let colors = ["red", "green", "blue"];
let hexCodes = ["#ff0000", "#00ff00", "#0000ff"];

let mappedColor = Object.fromEntries(
  colors.map((color, index) => [color, hexCodes[index]])
);
console.log(mappedColor)