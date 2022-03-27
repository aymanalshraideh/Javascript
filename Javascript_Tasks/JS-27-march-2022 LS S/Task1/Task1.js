
// function storeRecipe() {
//     localStorage.clear()
//     let name = document.getElementById("recipe-name").value;
//     let description = document.getElementById("recipe-description").value
//     localStorage.setItem(name, description);
// }

function sup() {

    let name = document.getElementById("fname").value;
    localStorage.setItem("fname", name);
    document.getElementById("ofname").innerHTML = "Name :" + localStorage.getItem("fname");



    let age = document.getElementById("age").value;
    localStorage.setItem("age", age)
    document.getElementById("oage").innerHTML = "Age:" + localStorage.getItem("age");

    let g = document.getElementById("gender").value

    localStorage.setItem("gender", g)

    document.getElementById("ogender").innerHTML = "Gender :" + localStorage.getItem("gender");

    let bri = document.getElementById("brief").value;
    localStorage.setItem("brief", bri);
    document.getElementById("obrief").innerHTML = " brief of me :" + localStorage.getItem("brief")

    let maj = document.getElementById("major").value;
    localStorage.setItem("major", maj);
    document.getElementById("omajor").innerHTML = "The Major is:" + localStorage.getItem("major")

    let uni = document.getElementById("nameU").value;
    localStorage.setItem("nameU", uni);
    document.getElementById("onameU").innerHTML = "The University is:" + localStorage.getItem("nameU");

    let dat = document.getElementById("date").value;
    localStorage.setItem("date", dat);
    document.getElementById("odate").innerHTML = "Birthday:" + localStorage.getItem("date");

    let lang = document.getElementById("languge").value;
    localStorage.setItem("languge", lang);
    document.getElementById("olanguge").innerHTML = "Programing Languge :" + localStorage.getItem("languge")

    let imge = document.getElementById("img").value;
    localStorage.setItem("img", "233.jpg");
    let i = document.getElementById("oimg");
    i.src = localStorage.getItem("img");

    let bm = document.getElementById("brothernum").value;
    localStorage.setItem("brothernum", bm);
    document.getElementById("obrothernum").innerHTML = "Brief Number:" + localStorage.getItem("brothernum");

    let b=document.getElementById("brotherbrief").value;
    localStorage.setItem("brotherbrief",b);
    document.getElementById("obrotherbrief").innerHTML="brother brief:"+localStorage.getItem("brotherbrief")
}


// localStorage.clear()