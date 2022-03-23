let myjs = document.querySelector(".js");
console.log(myjs.innerHTML);
console.log(myjs.textContent);

myjs.textContent = "Ayaman skdg.kqcxfvxzejhd <h1>aljsd</h1>";
document.images[0].src = "https://google.com";
document.images[0].alt = "Ayman";
document.images[0].title = "Aymann";
document.images[0].id = "pic";
document.images[0].className = "img";



let mylink = document.querySelector(".link");
console.log(mylink.getAttribute("class"));
console.log(mylink.getAttribute("href"));
mylink.setAttribute("href", "https://www.youtube.com/watch?v=9j9XvUnWndI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=87")
mylink.setAttribute("title","Elzero")