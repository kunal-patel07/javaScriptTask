
let url = "http://universities.hipolabs.com/search?name="
async function getData(country){
    let res = await axios.get(url+country)
     return res.data;
  }

let btn = document.querySelector("button");
btn.addEventListener("click", async function(){
 let country = document.querySelector("input").value;
 let collArr =  await getData(country);
 view(collArr)
})

function view(collArr){
    let ul =document.querySelector("ul")
    for (let coll of collArr){
        let item= document.createElement("li");
        console.log(coll.name)
        item.innerText= coll.name;
        ul.appendChild(item);
    }
}
