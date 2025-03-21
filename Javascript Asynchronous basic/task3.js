//Rewrite the Promise-based function using async/await 

function findSquare(num){
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(num*num);
    },1000)
  })
}
async function callSquare(){
  let result = await findSquare(12);
  console.log(result)
}
callSquare()