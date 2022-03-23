console.log(document.getElementsByTagName("p")[0].attributes)
let myp=document.getElementsByTagName("p")[0];
if (myp.hasAttribute("data-src")){
    if(myp.getAttribute("data-src")===""){
         myp.removeAttribute("data-src")

    } else{myp.setAttribute("data-src","New Value")}

    // console.log("found")

}
else{console.log("not Found")};

if (myp.hasAttribute("data-src")){}
