let myid = document.getElementById("a");
let mytag = document.getElementsByTagName("p");
let myclass = document.getElementsByClassName("a")
let myqu = document.querySelector(".b")
let myquall = document.querySelectorAll(".a")

myclass[0].innerHTML = "MY FIRST DOM";
mytag[0].innerHTML = "Shardih";
console.log(mytag[1]);

console.log(myid);
console.log(myqu);
console.log(myquall);
