// // losely packed language
// // a=10;
// "use strict";


// //example 
// var a = 12;
// console.log("hello"); //hello
// console.log(typeof a); //10

// //data type

// //string:
// //"" double coated coma is string.
// var a ="hello";

// //boolian:
// //is ntg but true or false.
// var a = true;

// //undefined:
// var a;

// // MEMORY AND CODE :
// // EXAMPLE:

// // var a is defined
// // func is defined
// // a=10

// // var X = 10
// // log X
// // log a



// var a=10;

// function func(){
//     var X=20;
//     console.log(X);
// }
// console.log(a);




// /////////////////////////////////////////////////////////////////////////

// //ES6

// // var vs let vs const

// // var vs let and const is its BLOCK SCOPE(inside function )
 
// //  const b=20;
//  //const is a constant value,we can't able to change,otherwise it will get error.

//  // in let we can able to change .
//  console.log(a);
//  console.log(b);
 
// //SIR SENDED THE CODE


// var a = 10;
// abc();

// function abc() {
//   let b = 20;
//   console.log(b);
// }

// function abc1() {
//   let t = 20;
//   console.log(b);
// }

// function abc2() {
//   let b = 20;
//   console.log(b);
// }

// function abc3() {
//   let b = 20;
//   console.log(b);
// }

// function abc4() {
//   let b = 20;
//   console.log(b);
// }

// console.log(a);

// ////////////////////////////////////////////////////////

// //DATE--18/10/2022

// //GEC
// //a is declared
// //function is declared

// //a is now 10

// //E1
// //decleare a
// //a is 20
// //a is logged
// //end the E1
// //destroy the E1 memory

// //a is logged 10

// var a=10;

// function abc() {
//   var a=20;
//   console.log(a);
// }

// abc();
// console.log(a);


// //operators

// var a=10;
// var b=20;

// var c=a+b;
// console.log(c);

// // ans will get as 30



// // CONDITIONAL STATEMENT

// var a=18;

// if (a>18) {
//   console.log("you can vote");
// } else {
//   console.log("you cannot vote");
// }


// //EXERSICE:

// //memory a is decleared
// //a is 12
// //12>=18
// //12>100

// var a=12;

// if (a >+ 18) {
//   console.log("you can vote");
// } else if (a>100){
//   console.log("you are very old");
// } else {
//   console.log("you cannot vote");
// }


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //i have 5 apples that needs to be given to 4 people tell in the console how many apples are extra if there are any

// var a= 5;
// var b=4;
// var c=a%b;

// if (a%b==0){
//   console.log("apples are equally divided");
// }
// else{
//   console.log("apples are not equally divided");
// }

///////////////                 GLOBAL EXICUTION CONTEXT    & EXICUTION CONTEXT         /////////////////////


// //this is an GEC-Global Exicution Context
// var a = 30;       //declaring the variable aswell as stored in memory too
// //now a is 30

// //ENTERING INTO THE E1-Exicution conext
// function tamil(){   //delcearing the function
//   var a = 40;       //declaring the variable a and storing in excicution context
//                     // a is now 40
//   console.log(a);   // a is logged
// }                   // and aswell ENDING THE EXCICUTION CONTEXT

// tamil();            //Calling The function and the answe will be 40/- E1 is closed and 
// console.log(a);     //GEC a is logged



var Minimal_Angle = (h, m) => 
{
    if( h === 12){
            h = 0;
          }   
          if( m === 60 ){
            m = 0;
            h+=1;
            if(h>12){
              h = h-12;
            }
          }
          
          let hour = 0.5*(h*60+m);
          let minutes = 6*m;
          let res = Math.abs(hour-minutes);
          res = Math.min((360-res),res);
          console.log(res);   
};