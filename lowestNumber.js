function lowestNumber(numbers) {
        let smallNumber = numbers[0];
        for (i = 0; i < numbers.length; i++) {
                if (numbers[i] < smallNumber) {
                        smallNumber = numbers[i];
                }
        }
        return smallNumber;
}

const minNumber = lowestNumber([-11, 22, 33, -44]);
console.log(minNumber);