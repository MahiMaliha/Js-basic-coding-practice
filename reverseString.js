const text = 'Hello! how are you?'
function reverseString(str) {
        let reverse = '';
        for (const letter of str) {
                reverse = letter + reverse;
        }
        return reverse;
}

console.log(reverseString(text));