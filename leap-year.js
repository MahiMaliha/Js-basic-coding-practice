//Check Leap Year with Javascript Function

function LeapYear(year) {
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                return year + " is a Leap Year";
        }
        else {
                return year + ' is not a Leap year';
        }
}

console.log(LeapYear(2400));