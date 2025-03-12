

// var i = 1;
// while (i <= 10) {
//     document.write(i+"<br>")
//     i++
// }




// var i = 1;
// var fact = 1
// var num = parseInt(prompt("Enter Your Number"))

// while (i <= num) {
//     fact = fact * i
//     i++
// }
// document.write("Your Factorial Value is " + fact + "<br>")




// var i = 1;
// var sumCounter = 0
// var num = parseInt(prompt("Enter Your Number"))

// while (i <= num) {
//     sumCounter = sumCounter + i
//     i++
// }
// document.write("Your Summision Value is " + sumCounter + "<br>")




var o = 1

while (o <= 5) {
    var i = 1
    while (i <= o) {
        document.write("*")
        i++
    }
    document.write("<br>")
    o++;
}



var o = 1

while (o <= 5) {
    var i = 1
    while (i <= o) {
        document.write(o)
        i++
    }
    document.write("<br>")
    o++;
}

var o = 1

while (o <= 5) {
    var i = 1
    while (i <= o) {
        document.write(i)
        i++
    }
    document.write("<br>")
    o++;
}




var num1 = 0
var num2 = 1
var i = 0

while (i <= 10) {
    var fab = num1 + num2
    document.write(fab + "<br>")
    num2 = num1
    num1 = fab
    i++
}


