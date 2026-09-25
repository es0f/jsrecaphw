function sortArray(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

let numbers = [5, 2, 8, 1, 3];

console.log("Original array:", numbers);
console.log("Sorted array:", sortArray(numbers));