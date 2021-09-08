//Check Odd Number Function

function isOddNumber(n) {
        if (n == 0) {
                return n + " is not valid value";
        }
        else if (n % 2 == 1) {
                return (n + " is ODD Number");
        }
        else {
                return (n + " is an Even Number");
        }
}

//Example for testing purposes
var number = 29;
console.log(isOddNumber(number))


//Check Even Number Function

function isEvenNumber(n) {
        if (n == 0) {
                return n + " is not a valid value";
        }
        if (n % 2 == 0) {
                return (n + " is Even Number");
        }
        else {
                return (n + " is Odd Number");
        }
}

//Example for testing purposes

console.log(isEvenNumber(50))