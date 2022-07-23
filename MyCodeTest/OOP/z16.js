
class GetSet{
constructor(name,email,password){

    this.name=name;
    this.email=email;
    this.password=password;
}
 Gpassword(gpass){
     
    this.password="*".repeat(this.password.length)
// return `Your Password is : ${}`

}

}
let user1=new GetSet("Ayman","sss@dd.ff",45511);
let s=user1.password;
console.log( s)