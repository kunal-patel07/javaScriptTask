// Implement a series of asynchronous operations that depend on each other using Promise chaining 
function add2(num) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`adding  2 in  ${num}`)
      resolve(num + 2);
    }, 1000);
  });
}

function mul2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`mul 2 in ${num}`)
      resolve(num * 2);
    }, 1000);
  });
}

function sub1(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`sub 1 in ${num}`)
      resolve(num - 1);
    }, 1000);
  });
}


         
async function addOperation(){
   let res1= await add2(2)
   let res2= await mul2(res1)
   let res3=await sub1(res2);
   console.log(res3)
}

addOperation()




