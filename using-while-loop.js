//While loop to display 7 to 19 all numbers. Only display odd numbers including 7 to 19,

let i = 7;
while (i <= 19) {
        if (i % 2 != 0) {
                console.log(i)
        }
        i++;
}

/* 
        You  have an array of number.Display only the number bigger
        than 80.
*/

const arrayNumber = [20, 40, 50, 60, 70, 80, 81, 90, 100];

for (const element of arrayNumber) {
        if (element > 80) {
                console.log(element)
        }
}

/* 
        Create a function which receive 3 number parameter and return multiply of 3number
*/

function multiply(a, b, c) {
        if ((typeof a == 'number') && (typeof b == 'number') && (typeof c == 'number')) {
                multiplication = a * b * c;
                return multiplication;
        }
        else {
                return 'Please Enter Valid Number'
        }
}
console.log(multiply('a', 3, 3));


/* Change Object Property */

const mobile = [{
        name: 'Xaomi Mi 7',
        price: 78000,
        camera: 64
}, {
        name: 'Xaomi Mi 12',
        price: 8000,
        camera: 44
}
]

mobile[0].name = 'Xaomi Mi 8';
mobile[0].price = 12000;
mobile[1].price = 22000;

console.log(mobile)

/* 
        Declare anray. Find How many element in that array.
*/

const array = ['Akash', 'Batash', 'Hotash', 'koi jash', 'edike ay'];
console.log('Total Element ', array.length);

/* Update 4th Position's Value */
array[3] = 'Kheye ja';
console.log(array)

/* Add Element */
array.push('chole ja');
console.log(array)

/* Remove Element */
array.splice(0, 3);
console.log(array)

/* Check Specific Value in Array */
if (array.indexOf('edike ay') != -1) {
        console.log('The value exist');
}
else {
        console.log('The value is not exist');
}