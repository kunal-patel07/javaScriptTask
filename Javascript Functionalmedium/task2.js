function pipe(...func){
    return function (values){
        return func.reduce((curr,item)=>item(curr),values);
    }
}
let sum  = (x) => x+2;
let mul = (x)=> x*2;
let div = (x)=> x/2;

let piped = pipe(sum,mul,div)
console.log(piped(12));