const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30, ];
let count = 0;
let primeArray = [];
let arraySum = 0;
let max = numbers[0];
let min = numbers[0];
for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % numbers[i] == 0) {
        count += 1;
    }
}
if (count == 2) {
    primeArray.push(numbers[i]);
}
for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}
console.log("Maximum in the prime array" + max);

for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
        min = numbers[i];
    }
}
console.log("Minimum in the prime array" + max);

for (let i = 0; i < primeArray.length; i++) {
    arraySum += primeArray[i];
}
console.log(" The Sum of all numbers in the primeArray : " + arraySum);