//TODO: Implement a curry function that converts a function of N arguments to N functions of 1 argument each 
function curry (fn){
  return function curried (...args){
    if(args.length >=fn.length){
      return fn(...args)
    }else{
      return (...newArgs) => curried(...args,...newArgs)
    }
  }
}
function sum(a,b,c){
  return  a+b+c;
}

let combineCurry=curry(sum)
console.log(combineCurry(12,12)(12))