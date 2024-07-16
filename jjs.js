function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

// Example usage
let numbers = [3, 1, 4, 1, 5, 9];
console.log(findMax(numbers)); // Output: 9

let emptyArray = [];
console.log(findMax(emptyArray)); // Output: null