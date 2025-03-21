// Write a function that uses a callback to square a number after a 1-second delay 
function square(num,callback){
    setTimeout(()=>{
        callback(num*num)
    },1000)
}
square(12, function(res){
    console.log(res)
})





