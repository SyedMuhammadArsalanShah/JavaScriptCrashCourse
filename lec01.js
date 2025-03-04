
var name = prompt("Enter Your Name ");
var email = prompt("Enter Your Email ");
var pass = prompt("Enter Your  Password ");
document.write("Account successfully created ");


var emailLogin = prompt("Enter Your Email Login");
var passLogin = prompt("Enter Your Password Login ");


if (email == emailLogin && pass == passLogin) {
    document.write("<h1> Welcome Ramzan Hampers </h1>")
    var items = parseFloat(prompt("Enter Your Items "));
    var amount = parseFloat(prompt("Enter Your Amount "));
    var isRepeated = prompt("AreU Repeated ? If yes = press y/Y ");


    if (items == 15 || amount >= 2500) {

        var discount = (amount * 20) / 100
        var finalprice = amount - discount;
        document.write("After 20% disc your Bill Is = " + finalprice)
        if (isRepeated == "Y" || isRepeated == "y") {

            var totalprice = (finalprice * 5) / 100;

            specialDiscount = finalprice - totalprice;
            document.write("After Special Disc Your Bill is " + specialDiscount)

        }

    }
    else if (items == 25 || amount >= 5000) {

        var discount = (amount * 30) / 100
        var finalprice = amount - discount;
        document.write("After 30% disc your Bill Is = " + finalprice)
        if (isRepeated == "Y" || isRepeated == "y") {

            var totalprice = (finalprice * 5) / 100;

            specialDiscount = finalprice - totalprice;
            document.write("After Special Disc Your Bill is " + specialDiscount)

        }

    }
    else if (items == 50 || amount >= 10000) {

        var discount = (amount * 50) / 100
        var finalprice = amount - discount;
        document.write("After 50% disc your Bill Is = " + finalprice)

        if (isRepeated == "Y" || isRepeated == "y") {

            var totalprice = (finalprice * 5) / 100;

            specialDiscount = finalprice - totalprice;
            document.write("After Special Disc Your Bill is " + specialDiscount)

        }
    } else {
        document.write("Your bill is = " + amount);
    }


} else {
    document.write("Incorrect Email or Password")
}