



function c(){
let s=document.getElementById("sup").value;
localStorage.setItem("sup",s)
document.getElementById("osup").innerHTML="Subject Name :"+localStorage.getItem("sup");

let name = document.getElementById("des").value;
localStorage.setItem("des", name);
document.getElementById("odes").innerHTML = "Description :" + localStorage.getItem("des");

let typee =document.getElementById("type").value;
localStorage.setItem("type",typee);
document.getElementById("otype").innerHTML="User Types:"+localStorage.getItem("type");

let ss=document.getElementById("tech").value;
localStorage.setItem("tech",ss)
document.getElementById("otech").innerHTML="Technology used:"+localStorage.getItem("tech");




}
