//Factorial Recursion with for loop:

function factorialRecursion(n) {
        let total = 1;
        if (n < 0) {
                return 'Please Enter Positive Value';
        }

        if (typeof n != 'number') {
                return 'Please Enter Number Value';
        }

        if (n === 0) {
                total = 0;
                return total;
        }

        if (n === 1) {
                total = 1;
                return total;
        }

        for (let i = n; i >= 1; i--) {
                total = n * factorialRecursion(n - 1);
                return total;
        }
}

console.log(factorialRecursion(5))