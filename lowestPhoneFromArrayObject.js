const mobiles = [
        { name: "iPhone 12plus", price: 20000 },
        { name: "iPhone 11plus", price: 110000 },
        { name: "iPhone 10plus", price: 100000 },
        { name: "iPhone 9plus", price: 99000 },
        { name: "iPhone 8plus", price: 89000 },
];

function lowestMobile(array) {
        let cheapest = array[0];
        for (const arr of array) {
                if (arr.price < cheapest.price) {
                        cheapest = arr;
                }
        }
        return cheapest;
}
console.log(lowestMobile(mobiles));
