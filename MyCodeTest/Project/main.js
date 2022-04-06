function getQuestion(){

    let myReqeuest =new XMLHttpRequest();
    myReqeuest.onreadystatechange= function(){
        if (this.readyState===4 && this.status===200){
            
          
          let qustionsobject=JSON.parse(this.responseText);
          console.log(qustionsobject);
        }
    }
    myReqeuest.open("GET","qustions.json",true);
    myReqeuest.send();
}
getQuestion();