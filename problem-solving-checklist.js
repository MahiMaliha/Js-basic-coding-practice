/* Feet To Inch */

function feetToInch(feet) {
        var inch = feet * 12;
        return inch;
}
console.log(feetToInch(3));


/* Centimeter To Meters */
function centimetersToMeter(centimeter) {
        const meter = centimeter / 100;
        return meter;
}
console.log(centimetersToMeter(5000), 'Meter');


/*
        Page Requirements
        1st Book = 100page
        2nd Book = 200page
        3rd Book = 300page

*/

function pageRequirements(a, b, c) {
        const firstBookPages = 100 * a;
        const secondBookPages = 200 * b;
        const thirdBookPages = 300 * c;
        const totalPages = firstBookPages + secondBookPages + thirdBookPages;
        return totalPages;
}
console.log('Total Pages need:', pageRequirements(1, 2, 2));


/*
        Biggest Best Friend Name
*/
const name = ['Akash', 'Batash', 'hotash', 'nananana'];

function bestFriend(arr) {
        let biggestName = arr[0];
        for (i = 0; i < arr.length; i++) {
                if (arr[i].length > biggestName.length) {
                        biggestName = arr[i];
                }
        }
        return biggestName;
}
console.log(bestFriend(name));


/* 
        Stop Looping when find negative number and add positive number in new Array
*/
const num = [1, 2, 3, 4, 5, 6, 22, -55, 66, 5522];
function onlyPositive(arr) {
        const newArr = [];
        for (i = 0; i < arr.length; i++) {
                if (arr[i] < 0) {
                        break;

                }
                newArr.push(arr[i])
        }
        return newArr;
}
console.log(onlyPositive(num));
