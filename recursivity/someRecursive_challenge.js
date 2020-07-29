// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;


function someRecursive(arr, fn) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;

    return fn(arr[0]) ? true : someRecursive(arr.slice(1), fn);
}


console.log(someRecursive([4, 6, 8], val => val > 10));
// console.log(someRecursive([4], isOdd));
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false