let gridContainer =document.querySelector(".grid-container");


function createGrid(count){
    gridContainer.innerHTML=""
    for(let i=1;i<=count;i++){
        let div = document.createElement("div");
        div.className="grid-items";
        div.innerText=`Item ${i}`
        gridContainer.appendChild(div);
    }
}

function updateDiv(){
    let column = window.innerWidth >1000?4:
                 window.innerWidth >600?3:
                 window.innerWidth >300 ?2:1;

                 gridContainer.style.gridTemplateColumns=`repeat(${column},1fr)`;
            createGrid(39)}
window.onload=updateDiv
window.onresize =updateDiv
