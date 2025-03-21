function genrateNav(pages) {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  pages.forEach((page) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#${page.toLowerCase().replace(/\s+/g, "-")}`;
    a.textContent = page;
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
  });
  document.body.appendChild(nav);
}
let pages = ["home", "about", "contact"];
genrateNav(pages);
