//helper functions
//get single digit from a number by index (i = 0 -> last digit)
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

//count digit quantity from a number
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//get the quantity of digits from the longest number in an array
const mostDigits = (arr) => {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

// best/avg/worst O(nk) -> n = arr.length * k = number of digits(average)
// space O(n + k)
const radixSort = (arr) => {
    const length = mostDigits(arr);

    for (let i = 0; i < length; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            digitBuckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

console.log(radixSort([23,345,5467,12,2345,9852]));
