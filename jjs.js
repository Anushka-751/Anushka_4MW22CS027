function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

// Example usage
let numbers = [3, 1, 7, 1, 2, 10];
console.log(findMax(numbers)); // Output: 10

let emptyArray = [];
console.log(findMax(emptyArray)); // Output: null
