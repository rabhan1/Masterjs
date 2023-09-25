// variables are very important concept in programming. It allows us to store and manipulate the various types/ kinds of values. For examples for values: stings, numbers, boolean. We store values and expressions in variables. expression is something that resolves to a value.
// In java script, there are three ways to declare a variable. They are: var( pre ES6), Let(ES6+), const(ES6+)


//syntax:
//vatiableType variableName (identifier)  '='(assignment operator) value
// Rules for writting identifier 
// i.  It must start with (a-z,A-Z) or '$' '_'
//ii. It shouldn't start with special characters except "$" and "_" and numbers
//iii. It is case sensative. For example : let x= 5 and let X=10 are differnt 
//iv. there shouldn't be any space inbetween
//v. reserved keywords cant be used as identifiers.
// Standard for identifiers in Javascript:
//i. Identifiers are written in CamelCase format.
//ii. idnetifiers must be relevent to the value.



// var- var is used to decalre variable which value may/can change the runtime
//1. variable declaration is possible in var
//var x; // this i variable declaration in var
 //x= 10;  // value initialization
 //3. varaibale redelaration is possible
 //var y = "hellp";
//var y  = "there" ; 
//  4.variable defined with var is function scoped
// 5. it is hoisted
 






//let -  let is used to decalre variables which may/can change during runtime
//1. variable declaration is possible in let
 //let y; // variable declaration in let 
  //y= "nine"  //value initialization
//. value can be reassigned 
//y= 4; // reassigned
 // 3. varaibale redelaration is not possible
 // 4  variable defined with let is blocked scoped
// 5. it isn't hoisted




//const - const is used to define constant variables, that means values stored using const can't /shouln't be changed
//1.variable declaration is not possible in const
// const PI; (this isnt valid) variable declaration only is not possible in const
// 2.value cant be reassigned in variable declared with const
//const PI = 3.14;
//PI = 4 ;
//3.variable defined with const is blocked scoped
// 4. it isn't hoisted




// classification  of variable in javascript 
//i. global variable 
// ii. local variable
//->function scoped
//-> block scoped


//block- reason inside curly bracket 


console.log (a)
var a= 7;
console.log (a)

