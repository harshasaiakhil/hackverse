let src = localStorage.getItem("src");
let name = localStorage.getItem("name");
let abtPro = localStorage.getItem("abtPro");
let detailimg = document.querySelector("#productImg");
let detailname = document.querySelector("#proName");
let detailabt = document.querySelector("#proAbt");
console.log(abtPro);

detailimg.setAttribute("src", src);
detailname.innerText = name;
detailabt.innerText = abtPro;
