function makeCapital(sentence){
  return sentence.split(" ")
  .map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}
console.log(makeCapital("this is how it look like"))