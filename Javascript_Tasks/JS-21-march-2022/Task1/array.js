console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
/* Answer 1-)                                  ...............................................................
[1,7,9,49]
["Str","alex","moh" ]
['the','fox' ,'over' ,'lazy', 'dog']
/*

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

Answer 2-)                                      ..........................................................
the index of "Banana" is....     fruits[1]
the index of "Tomato" is....     fruits[0]

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

Answer 3-)                                          ......................................................
1-)var FavFood=["Mansaf","Maglobah","Shawerma","Awzy","Kabsaa"];
2-)var FavSport=["Football","Karateh","Swiming"];
3-)var FavMovie=["Taitanec","Fast And Furious","300","The War"];


*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"

Answer 4-)                                         ..................................................
let firstOfArray=["t","u","g","x"];
function myArray (firstOfArray){

    return firstOfArray[0];

}



*/


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"

Answer 5-)                                        .......................................
let z=["t","u","g","x"]
function lastOfArray(z){
  

 return z[z.length-1]


}

*/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]

Answer 6-)                        .............................................

array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);



*/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]

Answer 7-)                                      ........................................................

array.shift();   ------->  [9,-7,3.5]
array.unshift(6);   ------->  [6,9,-7,3.5]
array.push(99);   ------->  [6,9,-7,3.5,99]

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

// Answer 8-)                                  .................................................
// let middl=["t","u","l","g","u","l","g"];

//  function middleOfArray(middl){
//    if(middl.length%2==1){ 
//  return  middl[Math.ceil(middl.length/2)-1]; ;
//       }
//       else{
//             return [middl[parseInt(middl.length/2)-1],middl[parseInt(middl.length/2)] ]

//       }

//  }
/*
9//
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/



// Answer 9-)
// var animals = ['cat', 'ele', 'bird']
// animals[0]='zebra';
// animals[1]='elephant';
// animals.pop();


// //Answer 9-)                                    ....................................................
// var nums= [1,2,3,8,9];
// nums[0]=5;
// nums[1]=-22;
// nums[3]=5;
// nums[4]=44;
// nums.push(98,44);


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

// Answer 10-)                         ....................................................

// var nums= [1,2,3,8,9]
// function indexOfArray(nums, n) {



//     return nums[n];




// }
// console.log(indexOfArray(nums, 2));



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
// Answer 11-)                     .....................................................

// var num= [1,2,3,8,9]
// function arrEx (num){
//     num.pop();

//    return num;


// }
// console.log(arrEx(num));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// Answer 12-)                            ...............................................
// var nums= [1,2,3,8,9]
// function addEnd(nums,E){
// nums.push(E);
// return nums;


// }
// console.log(addEnd(nums,55))

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
//Answer 13-)                                  ..................................................................

//{For}
// var nums= [1,2,3,8,9];
// var sum=0;

// function sumArr(nums,sum){

//   for(let i=0;i<nums.length ;i++){
//       sum=sum+nums[i];

//   }
// return sum;

// }
// console.log(sumArr(nums,sum));
//{while}

// var nums= [1,2,3,8,9,10];
// var sum=0;

// function sumArr(nums,sum){
//    let i=0;
//   while(i<nums.length ){

//       sum=sum+nums[i];
//       i++;

//   }
// return sum;

// }
// console.log(sumArr(nums,sum));
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
//Answer 14-)                                  ..................................................................
// var nums= [0,1,2,3,8,9];


// function minArr(nums){

//  nums=Math.min.apply(Math,nums)




// return nums;

// }
// console.log(minArr(nums));



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

//Answer 15-)                                  ..................................................................  
// var nums= [1,2,3,8,9];
// function remove(nums,s){
//     for(var i=0;i<nums.length;i++){
//       if(nums[i]==s){
//         nums.splice(i,1); 
//       }
//     }
//     return nums;
// }
// console.log(remove(nums,8));





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
//Answer 16-)                                  ..................................................................
// var nums= [1,2,3,8,9,11];
// function odd(nums){
//     for(var i=0;i<nums.length;i++){
//       if(nums[i]%2==0){
//          nums.splice(i,1);
//       }
//     }
//      return nums;
// }
//      console.log(odd(nums)) ;  

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
//Answer 17-)                                  ..................................................................


// var nums= [1,2,3,8,9,77];
// var avg=0;
// function avgofarray(nums,avg){
// for(i=0;i<nums.length;i++){
//    avg=avg+nums[i];

// }
// avg=avg/nums.length
// return avg;
// }
// console.log(avgofarray(nums,avg))



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

//Answer 18-)                                  ..................................................................

// function short(strings){
//     min = strings[0].length;
//     let index = 0;
//     let count = 0;

//     for(let i = 0; i < strings.length ; i++){
//         count = strings[i].length;
//         if(count < min){
//             min = count;
//             index = i;
//         }
//     }



//     return index;

// }

// strings= ["alexs","mercer","madrasa","rashed2","semad","hala"]

// short(strings)
// console.log(strings[short(strings)])


// function wshorte(strings){
// min=strings[0].length;
// let index =0;
// let count =0;
// let i=1;
// while(i<strings.length){

//     count = strings[i].length;
//             if(count < min){
//                 min = count;
//                 index = i;

// } i++;


// }
// return index;
// }

// strings= ["alexs","mercer","madrasa","rashed2","semad","hala"]

// wshorte(strings)
// console.log(strings[wshorte(strings)])









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
//Answer 18-)                                  ..............................................................
// function repeatChar(string, char) {
//     count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == char)
//             count++;    }

//     return count;
// }
// var string = "alex mercer madrasa rashed2 emad hala"

// console.log(repeatChar(string, "s"));


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

// function evInOdd(strings){
// var even=[];

// var index=0;

// for (let i=0;i<strings.length;i++ ){
      
//          if((strings[i].length % 2 != 0) && ((i % 2) == 0))
//        {
//            even[index]=strings[i];
//            index++;
//        }

      

// }
//  return index;
// }var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];

// console.log(evInOdd(strings));

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
