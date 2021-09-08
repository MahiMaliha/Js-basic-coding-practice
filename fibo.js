
let fibo = [0, 1];
for (var i = 2; i <= 10; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo)

/*
Create a Function
For FibonacciSeries
*/

function fibonacciSeries(n) {

        if (n < 2) {
                return 'Please give a Valid number greater than 2'
        }
        else if (typeof n == 'number') {
                let fibo = [0, 1];
                for (var i = 2; i <= n; i++) {
                        fibo[i] = fibo[i - 1] + fibo[i - 2];
                }
                return fibo;
        }
        else {
                return 'Please give a Valid number greater than 2'
        }
}
console.log(fibonacciSeries('-12'))
