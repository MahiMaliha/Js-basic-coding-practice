function Sum(array) {
        let sum = 0;
        for (i = 0; i < array.length; i++) {
                sum = sum + array[i];
        }
        return sum;
}

const numbers = Sum([1, 3, 3]);
console.log(numbers);

