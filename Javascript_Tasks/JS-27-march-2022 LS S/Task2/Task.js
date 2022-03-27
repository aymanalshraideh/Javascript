



function c(){
let s=document.getElementById("sup").value;
sessionStorage.setItem("sup",s)
document.getElementById("osup").innerHTML="Subject Name :"+sessionStorage.getItem("sup");

let name = document.getElementById("des").value;
sessionStorage.setItem("des", name);
document.getElementById("odes").innerHTML = "Description :" + sessionStorage.getItem("des");

let typee =document.getElementById("type").value;
sessionStorage.setItem("type",typee);
document.getElementById("otype").innerHTML="User Types:"+sessionStorage.getItem("type");

let ss=document.getElementById("tech").value;
sessionStorage.setItem("tech",ss)
document.getElementById("otech").innerHTML="Technology used:"+sessionStorage.getItem("tech");




}
