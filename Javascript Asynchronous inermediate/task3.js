async function* genrateNum(){
  let num=1;
  while(true){
    await new Promise ((resolve)=> {setTimeout(resolve,1000)})
    yield num++
  }
}

async function runNum() {
  for await (let value of genrateNum()){
    console.log(value)
    if(value  === 7){
   break;
    }
  }
}

runNum( )