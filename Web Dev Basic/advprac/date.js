function loadScript (src,callback){
    let script = document.createElement("script");
  script.src =src;
  script.onload = ()=> callback(null,script);
  script.onerror=(err)=>{ callback(err)}
  document.head.appendChild(script);
}
// loadScript ("test.js",(err,script)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("script loaded")
//     }
// })

function promisify(fn){
    return function(...args){
        return new Promise((resolve,reject)=>{
            fn(...args,(err,result)=>{
                if (err) return reject(err);
                return resolve(result);
            })
        })
    }
}
let loadScriptnew = promisify(loadScript);
loadScriptnew('test.js').then(()=>{
    console.log("done")
}).catch((er)=>{
    console.log("error")
})

(async ()=>{
    let result = await loadScript("test.js")
    console.log("done")
})()