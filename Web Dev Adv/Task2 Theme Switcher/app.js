function changeTheme(){
  document.body.classList.toggle("dark");
  let theme=document.body.classList.contains("dark")?"dark":"light";
   localStorage.setItem("theme",theme)
}

function storeLocal(){
  let savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark"){
    document.body.classList.add("dark");
  }
}

window.onload=function(){
  changeTheme()
  document.querySelector("#themeSwitcher").addEventListener("click",changeTheme);
}