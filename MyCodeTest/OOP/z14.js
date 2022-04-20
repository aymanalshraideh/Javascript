class User{
    static count=0;
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        User.count++;
    }
    fullName(){
        return `${this.fname} ${this.lname}`
    }
    alldata(){
        return `
        The data for  user is : 
         First Name:${this.fname}
          Last Name:${this.lname}
           Age: ${this.age}
           Welcome in our Company`
    }
    static NumberOfUsers(){
        return `The Number Of Users is:${User.count}`
    }
}
let user1=new User("Ayman","Alshraideh",25);
let user2=new User("Mohammad","Alshraideh",22);
let user3=new User("Abood","Alshraideh",19);
let user4=new User("Abdallah","Alshraideh",15);

console.log(user1.fullName());
console.log(user1.alldata());
console.log(user2.alldata());
console.log(user3.alldata());
console.log(user4.alldata());
console.log(User.NumberOfUsers())