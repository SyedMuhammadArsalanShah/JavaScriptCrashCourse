

// even odd 

// var num = parseInt(prompt("Enter Your Number "))
// for (let index = 1; index <= num; index++) {

//     if (index % 2 == 0) {
//         document.write("Number Is Even " + index + "<br>")
//     }
//     else {
//         document.write("Number Is Odd " + index + "<br>")
//     }

// }




var num = parseInt(prompt("Enter Your Number "))
var isprime = true;
for (let index = 2; index <= Math.sqrt(num); index++) {


    if (num % index == 0) {

        isprime = false;
        break;
    }


    
}

if (isprime) {


    document.write("Prime Number")
}
else {
    document.write("Is not Prime Number")
}






