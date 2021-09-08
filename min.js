function minValue(a, b, c) {
        if (a < b && a < c) {
                return ("a is Small than other");
        }
        else if (b < a && b < c) {
                return ("b is smaller than other");
        }
        else {
                return ("c is Smaller than");
        }
}

const small = minValue(11, 8, 10);
console.log(small);