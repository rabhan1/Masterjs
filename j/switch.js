// switch case statement 

// Syntax

// switch(value){
//     case value1:
//         code to be executed of value is matched 
//         break
//     case value2:
//             code to be executed of value is matched 
//             break
//     case valueN:
//             code to be executed of value is matched 
//             break
//     default:
//         code to be executed if non of the above case is matched
                
// }

// use switch case for traffic signal 
//  let signal ="RED"
//  switch(signal) {
//     case "RED":
//         console.log(`Stop`)
//         break 
//      case "YELLOW":
//             console.log(`Get Ready`)
//             break
//      case "GREEN":
//             console.log(`GO`)
//              break   
//     default : 
//         console.log(`NO SIGNAL`) 
    
//     }

let totalmarks=500,obtained=300
let percentage=(obtained/totalmarks)*100
switch(true){
    case percentage>=90 :
        console.log("A+")
        break
        case percentage>=80 :
            console.log("A")
            break
            case percentage>=70 :
                console.log("B+")
                break
                case percentage>=60 :
                    console.log("B")
                    break
                default : 
                console.log(`Useless mfs`)
                                
}