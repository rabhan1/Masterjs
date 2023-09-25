 // Operators: operators are the signs and Symbol
// Types of Operators in  javascript
// i. airthmetic operators
    // a. additional operators (+)
    // let a=5;
    // let b= 10;
    // let sum = a+b;
    // console.log (a+b);
    // console.log (a-b);
    // conso>le.log (a*b);
    // console.log (b/a);
    // console.log (a%b);
    // console.log (a**2);
    
    // b. subtraction operators(-)
    // c. multiplication operators(*)
    // d. division operators(/)
    // e. modulous operators(%)
    // f. exponential operators(**)
    // g. Concat operators(+): incase of strings in java Script, '+' sign acts as concat operators
            // eg: "ram"+ "sita"
            // output: "ramsita"
        // Type coercion: it is the default behaiour of javascript that forcefully changes one datatype to another datatype to execute the operation successfully. 
        // type conversion: It is the method of converting one data type to another accoring to developers will to generate expected outcome 
        // parseInt ("20")= 20 convert gardinxa
        // parseFloat("20.5")= 20.5 convert garda (both are old method)
        // number ("50")=50
        // +"200" = 200
// ii. assignment operators
    // a. assignment operator(=) let x = 5
    // b. Addition assignment(+=)
        // example:    x+= 2 (x=x+2)
    // c. Subtraction assignment(-=)
    //     example: x-= 3 (x=x-3) 
    // // d. Multiplication assignment(*=)
    // example: x*= 2 (x=x*2)
    // // e. Division assignment(/=)
    // example: x= 3 (x=x/3)
    // // f. Moulous assignment(%=)
    // example: x%= 2 (x=x%2)
    // g. Modulous operators 
    // example: x**= 2 (x=x**2)
// iii. compairasion (relational) operators : It always returns boolean value based on the comparision  For exapmple: 
// a. greter than (>)
//         console.log(9>10) // Flase
//         console.log(10>9) // True
//         console.log(10>10)  //false
// b. less than (<)
//         console.log(9<10) // True
//         console.log(10<9) // False
//         console.log(9<9)  //False
// c. Greter than or euqual ti (>=)
//         console.log(9>=10)// false
//         console.log(10>=9)// true
//         console.log(10>=10)// true
// d. less than or equals to (<=)
//         console.log(9<=10)// true 
//         console.log(10<=9)// false 
//         console.log(9<=9)// true 
// e. Equals to (==) : 
//         only cares about value not data type // loose
//         console.log('10'==10)// true 
//         console.log(10==9)// false
// f. Equals to (===)
//         It checks if both value and the data type are equals    
//         console.log('10'===10) // false
// g. not equals to (!=)
//         console.log(10!=9) //True                              


// iv. logical operators: The operator that is used to combine boolean values and manipulate them
        // a. AND operators (&&)
        //     It returns true if all of the values are true 
        //         ***WAP to check if you are eligible to enter the club and get a free drink
        //             Conditions :    
        //                     #You must be 18 or older 
        //                     # You must be a girl 

                                    // let age = 20
                                    //     let isFemale = true
                                    //     if (age>=18 && isFemale)
                                    //     {
                                    //         console.log( 'You are eligible to enter the club and get a free drink')
                                    //     }
                                    //     else{
                                    //         console.log('Sorry, No entry and No Free Drink')
                                    //     }
                //  ***WAP to check if the office is opened or closed 
                //         Conditions: 
                //             # Office timing 10-17
                //             # Ofiice closes on weekend
                //             #office closes on Holiday 
                                                
                                        // let currentTime = 14
                                        // let isHoliday = false
                                        // let isWeekend = true
                                        // if( currentTime>=10 && currentTime<=17 && !isHoliday && !isWeekend)
                                        // {
                                        //     console.log ('We are Open')
                                        // }
                                        // else
                                        // {
                                        //     console.log('We are closed')
                                        
                                        // }

        // b. OR operators(||)
        //                 ***you can enter the club if 
        //                     conditions:
        //                     #If you are 18 or above 
        //                     #your own the club 
        //                     # your cacha is vidhayak 
                                        
                                            // let age= 16
                                            // let isOwner= true 
                                            // let isCachaVidhayak = false
                                            // if ( age>= 18 || isOwner || isCachaVidhaya)
                                            // {
                                            //     console.log (' Bhirta jana pais')
                                        
                                            // }
                                            // else {
                                            //     console.log('Painas jana')
                                            // }
        // *** WAP to find the greatest number among three numbers 
                            //  let a= 6
                            // let b=5
                            // let c=6
                            // if (a>b && a>c )
                            // {
                            //     console.log("a is greatest")
                            // } 
                            // else if (b>c && b>a)
                            // {
                            //     console.log( 'b is greatest')
                            // }
                            // else if(a==b || a==c)
                            //     {
                            //         console.log('a and b are equal')
                            //     }
                            //     else if(a==b && b==c && c==a)
                            //     {
                            //         console.log(' a b and c are equal')
                            //     }
                            
                            // else {
                            //     console.log('c is greatest')
                            // }
        //     It returns true if at least one of the value is true.
        // c. NOT operators(!)
        //     It is a unary operator that inverts the Boolean value

// // v. special operators
//     a. Ternary operator (conditional operator): It is the shorthand of 'If Else' statement. Since it is an operator it can be stored in a variable .
                // Syntax:
                     //     condition ? (code to be executed if the condition is true) : (code to be executed if condition is false).
                                // WAP to check if you're eligible to vote 
                                        //  let age = 17
                            //             //  if (age>=18)
                            //             //  {
                            //             //     console.log(`You are eligible to vote`)
                            //             //  }
                            //             //     else{
                            //             //         console.log(`You're not `)
                            //             //     }
                            // // console.log(age>=18?`You're eligible to vote`:`You're not eligible` )
                            // let outputstring = age>=18?`You're eligible to vote`:`You're not eligible` 
                            //  console.log ( outputstring)
                            // let canVote = age>=18 

                            // console.log ( canVote) 
        //  b. Nullish Coelscing Operator (??): If LHS side of oerator has null or undefined value then RHS side of operator will be executed.
        //              let a;

        //              a ?? console.log(`this is ececuted because there is null or `)
        //                  let address = `KTM`
        //                  address?? console.log (`Please enter your address`)
        //     c. Unary Operator : The Operator that operators with only one operand (value) are called unary operator.
        //                         i. NOT operator(!)
        //                         ii. typeof operator
        //                                 returns the datatype of operator
        //                                          console.log(typeof (5)) // Number
        //                         iii. Negation Operator(-)
        //                                 let x = -5
        //                                 console.log (-x)
        //                         iv. Increment operator (++): It increments value by 1.
        //                                 let a = 5
        //                                 a++
        //                                 console.log(a) // 6
        //                         v. decrement operator(--): It decrements the value by 1.
        //                                 let b = 7
        //                                 b--
        //                                 console.log (b)
                        //   POSTFIX 
                        //         let a =5
                        //         let b = a++
                        //         console.log(a) // 6
                        //         console.log(b) // 5
                        //   PREFIX 
                        //             let a =5
                        //             let b =++a 
                        //             console.log(a) //6
                        //                 console.log(b) //6





// Truthy and falsy values in Javascript
// 0, 0n , -0, "", false, undefined, null, NaN are falsy value in Javascript except these values all the values all the values are considered as Truthy values during the condition/ Boolean check
 


// Short Circutting 
//          Using AND operators
//              let age = 18
//              let hasVoterId= true 
//              age >=18 && hasVoterId && console.log("go to vote")

// let firstName ="ram"
// let lastName ="hari"
// let userName=""
// if(!userName )
// {
//     userName= firstName+"_"+ lastName
// }
// else 
// {
//     userName= userName
// }
// console.log(userName) 


