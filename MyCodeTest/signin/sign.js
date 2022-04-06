let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let fpass = document.getElementById("pass1");
let lpass = document.getElementById("pass2");
let uname = document.getElementById("uname")
let email = document.getElementById("email");
let fnlabel = document.getElementById("fnlabel");
let lnlabel = document.getElementById("lnlabel");
let fplabel = document.getElementById("pass1label");
let lplabel = document.getElementById("pass2label");
let unlabel = document.getElementById("unlabel");
let emaillabel = document.getElementById("email");
let nameReg = /^[A-Za-z]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function sub() {


    
    
    
    localStorage.setItem("uname", uname.value)
    localStorage.setItem("email", email.value)
    if (fname.value.match(nameReg)) {
        localStorage.setItem("fname", fname.value)
        fnlabel.innerHTML = "";
    } else {
        fnlabel.innerHTML = "Please Enter valed name";
        fnlabel.style.color = "red";
    }


    if (lname.value.match(nameReg)) {
        localStorage.setItem("lname", lname.value)
        lnlabel.innerHTML = "";
    } else {
        lnlabel.innerHTML = "Please Enter valed name";
        lnlabel.style.color = "red";
    }
let nn=fpass.length
console.log()

    if (fpass.length<6)
    { fplabel.innerHTML = "Please Enter valed passwprd(at least 6 digit)";;
       fplabel.style.color="red";
    }else
    {
        localStorage.setItem("pass1", fpass.value)
    }
    if(fpass!=lpass){
         lplabel.innerHTML="Please input two same password"

    }else{
        localStorage.setItem("pass2", lpass.value)
    }
    

    // let m=[]
    // m.push(fname.value)
    // localStorage.setItem("fname",m)

    // console.log(localStorage.getItem("fname"))
}
// let m=[1,2,3];
// localStorage.setItem("array",m)
// console.log(localStorage.getItem("array"))