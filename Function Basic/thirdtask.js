// Write a function that adds an element to the array without mutating the original 

const originalArray = [1, 2, 3, 4, 5];
function addElement(arr,newVal){
    return  [...arr,newVal];
}

const newArr = addElement(originalArray,21)
console.log(newArr)
