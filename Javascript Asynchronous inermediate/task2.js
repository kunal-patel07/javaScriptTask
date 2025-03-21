  
// TODO: Fetch data from multiple APIs concurrently using Promise.all 


let axios =require('axios');

let apis= [
    'https://catfact.ninja/fact',  // Random cat fact
    'https://dog.ceo/api/breeds/image/random', // Random dog image
    'https://api.adviceslip.com/advice' // Random advice
]
Promise.all(apis.map(url=> axios.get(url)))
.then((res)=>{
    console.log(res[0].data.fact)
    console.log(res[1].data.message)
    console.log(res[2].data.slip.advice)
})
