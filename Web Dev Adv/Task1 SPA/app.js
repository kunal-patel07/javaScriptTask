    let pages={
    home:`<h1>this is home page</h1>`,
    about:`<h1>this is about page</h1>`
}

function showItem(page){
    document.querySelector(".container").innerHTML=pages[page]
}
window.onload=function(){
    showItem("home")
}