let l1 = document.getElementById("lab1");
let l2 = document.getElementById("lab2");
function password() {
   let p1 = document.getElementById("pass1").value;
   if (p1.length < 6) {
      l1.innerHTML = "Too Short";
      l1.style.color = "red";
   } else { l1.innerHTML = ""; }
}
function password2() {
   let p2 = document.getElementById("pass2").value;
   let p1 = document.getElementById("pass1").value;
   if (p2 != p1) {
      l2.innerHTML = "The Two Password don't match";
      l2.style.color = "red";
   } else {
      l2.innerHTML = "";
      document.getElementById("sub").style.display = "block";
   }
}
