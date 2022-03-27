console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let m=["t","u","g","x","t","u","g","x"];
function firstOfArray(){
 
    return m[0];


}
console.log("Task:4")
console.log(firstOfArray());

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
 let s=m.length;
function lastOfArray(){
   n=m[s-1]
    return n

}
console.log("Task:5")
console.log(lastOfArray())


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1,2,3,4,6,8)
console.log(array)
// for(let i=0;i<array.length;i++)
// {
// if(array[i] in array){
//    array.shift()

// }else{
//   array.unshift(i);  

// }


// }
// console.log(array)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(){
    
   let r=Math.ceil(m.length/2) ;
    if ((r%2==0))
    {
       m=[m[r-1], m[r]] 
       return m;
    }else{

        m=m[r-1]
        return m;
    }
    

}
console.log("Task:8")
console.log(middleOfArray())

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9];
function indexOfArray(nums,n){
  
    let s=nums[n]

return s;
}

console.log(indexOfArray(nums,3))
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(nums){
  
    let d =nums.pop()

return nums;
}
console.log(arrayExceptLast(nums))
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums1= [1,2,3,8,9];
function addToEnd(nums,n){
  
    let l=nums1.length-1;
    nums1[l]=n;

return nums1;

}

console.log(addToEnd(nums1,55))
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums2= [1,2,3,8,9,100];
function sumArray(nums2){

    let sum=0;
  for(let i=0; i<nums2.length;i++)
  {
   sum=sum+nums2[i]


  }
return sum;

}
console.log(sumArray(nums2))
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums3= [0,1,2,3,8,9];
let min=Infinity;
function minInArray(nums3){
    
    for(let i=0;i<nums3.length;i++){
        
         if (nums3[i]<min){
             min=nums3[i];
         }

    }
return min;


}
console.log(minInArray(nums3));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums4= [1,2,3,8,9]
function removeFromArray(nums4,n){
     for(let i =0 ;i<nums4.length;i++){
              if(n===nums4[i])
              {
                  nums4.splice(i,1)
              }


     }

return nums4;

}
console.log(removeFromArray(nums4,9))
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums5= [1,2,3,8,9]

function oddArray(nums5){
  for (let i=0;i<nums5.length;i++){
         if (nums5[i]%2===0){
             nums5.splice(i,1);
         }

  }
return nums5;


}
console.log(oddArray(nums5))



/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums6= [1,2,3,8,9]
function aveArray(nums6){
    let m=0;
      for(let i=0;i<nums6.length;i++){
           
        m=m+nums6[i];


      }
return m/nums6.length;

}
console.log(aveArray(nums6))
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterInArray(strings){
    let m=Infinity;
   for(let i=0;i<strings.length;i++){
       if (strings[i].length<m)
             {

                m=strings[i]
             }
            

   }
return m;

}

console.log(shorterInArray(strings))

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string2= "alex mercer madrasa rashed2 emad hala"
function repeatChar(string2,m){
  let s=string2.split("");
  let count=0;
for(let i=0;i<s.length;i++){
    if(s[i]==m){
     count++

    }

}
return count
}

console.log(repeatChar(string2,"r"))
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings3= ["alex","mercer","madrasa","rashed2","emad","hala"]
function evenIndexOddLength(strings3){
   let a=Infinity;
   for(let i=0;i<strings.length;i++){
    let l=strings3[i].split(" "); 
    if(l.length>a){
          a=strings3[i]

    }
   }


}
console.log(i.length)
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
