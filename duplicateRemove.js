/*
        Remove Duplicate Element from Array Using Function with for loop and If conditions
*/


let age = [10, 11, 12, 13, 14, 15, 11, 16, 12];
const names = ['A', 'A', 'B', 'C', 'D', 'E', 'F', 'A', 'B']
function UniqueElement(age) {
        const uniqueAge = [];
        for (const element of age) {
                if (uniqueAge.indexOf(element) == -1) {
                        uniqueAge.push(element);
                }
        }
        return uniqueAge;
}
console.log(UniqueElement(age));
console.log(UniqueElement(names));