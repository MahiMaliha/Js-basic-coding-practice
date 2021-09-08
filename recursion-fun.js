//Sum of number using Recursion method:

function sum(n) {
        if (n === 1) {
                return 1;
        }
        return n + sum(n - 1);
}
console.log(sum(5));

//Multiply Recursion:
function multiply(i) {
        if (i === 1) {
                return 1;
        }
        return i * multiply(i - 1);
}
console.log(multiply(7))