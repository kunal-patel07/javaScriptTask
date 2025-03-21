//TODO: Implement a recursive function to flatten a nested array 
function flatarr(arr){
  return  arr.reduce((curr,value)=>
  curr.concat(Array.isArray (value) ? flatarr(value): value),[])
}
let arr = [1,3,[4,[5],4],6];
let combinedArr = flatarr(arr)
console.log(combinedArr)