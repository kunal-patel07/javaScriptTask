    let pages={
    home:`<h1>this is home page</h1>`,
    about:`<h1>this is about page</h1>`
}

function showItem(page){
    document.querySelector(".container").innerHTML=pages[page]
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`button[data-page="${page}"]`).classList.add("active");

}
window.onload=function(){
    showItem("home")
}

