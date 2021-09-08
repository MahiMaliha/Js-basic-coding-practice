//Factorial with Javascript

function factorial(n) {
        var number = 1;
        for (var i = 1; i <= n; i++) {
                number = number * i;
        }
        return n + '! = ' + number;
}

console.log(factorial(7));