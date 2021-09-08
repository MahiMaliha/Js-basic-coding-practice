//Find Factorial by Using While Loop

function factorial(n) {
        let number = 1;
        let i = 1;
        while (i <= n) {
                number = number * i;
                i++;
        }
        return n + '! = ' + number;
}

console.log(factorial(7));

//By Using decrement Find Factorial

function getFactorial(n) {
        let number = 1;
        let i = n;
        while (i >= 1) {
                number = number * i;
                i--;
        }
        return n + '! = ' + number;
}

console.log(getFactorial(5))