//Using Logical And Or operator

var name = 'Abdullah';

var fullName = name || 'Abdullah Al Akash';
console.log(fullName);


//Another Example:
var password = '';

var result = ((typeof password === 'string' && password.length !== 0) && ' Thank You,' + ' Your Password is: ' + password);


console.log(result);
//If result is false:
result === false && console.log('Enter a valid password Please');


// var validName = result == true && 'Enter Valid Name';

// console.log(validName);