// Convert the above callback-based function to use Promises 
function findSquare(num){
    return new Promise((resovle,reject)=>{
        setTimeout(()=>{
            resovle( num*num);
        },1000)
    })
}
findSquare(12).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})





