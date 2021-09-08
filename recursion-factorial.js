//By using recursion function find Factorial

function getFactorial(n) {
        if (n == 1) {
                return 1;
        }
        else if (n == 0) {
                return 0
        }
        else {
                return n * getFactorial(n - 1);
        }
}

console.log(getFactorial(10))