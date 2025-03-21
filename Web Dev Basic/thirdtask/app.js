let btn = document.querySelector("button");
let url ="http://universities.hipolabs.com/search?name="

async function getData(country){
    let res = await axios.get(url + country)
    return res.data; 
}

btn.addEventListener("click", async function(){
    let inputField = document.querySelector("input");
    let country = inputField.value;
    let collArr= await getData(country);
    view(collArr)
    inputField.value="";
})

function view(collArr){
    let list =document.querySelector("ul");
    
    list.innerHTML="";
    for (let coll of collArr){
       let li = document.createElement("li");
       li.textContent=coll.name;
       list.appendChild(li);
    }
}