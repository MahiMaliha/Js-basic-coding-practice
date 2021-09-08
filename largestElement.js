function largestElement(numbers) {
        let largest = numbers[0];
        for (i = 0; i < numbers.length; i++) {
                if (numbers[i] > largest) {
                        largest = numbers[i];
                }
        }
        return 'Large Number is ' + largest;
}

const largeNumber = largestElement([10, 22, 33, 55]);
console.log(largeNumber);