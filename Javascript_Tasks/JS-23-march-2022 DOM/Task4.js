let p=document.getElementById("par");

function font(){

let f=document.getElementById("fo").value;
 p.style.fontFamily=f;


}
function sizee(){
   
let s=document.getElementById("siz").value;
p.style.fontSize=s;



}
function ital(){
    if(it.checked==true){
let i=document.getElementById("it").value;
p.style.fontStyle=i;}
else{p.style.fontStyle="normal"}

}
function bolde(){
    if(bol.checked==true){
let b=document.getElementById("bol").value;
p.style.fontWeight=b;}
else{p.style.fontWeight="normal"}

}
function under(){
    if(un.checked==true){
let u=document.getElementById("un").value;
p.style.textDecoration=u;}
else{p.style.textDecoration="normal"};

}