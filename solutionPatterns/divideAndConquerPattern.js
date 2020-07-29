// const search = (arr, value) => {
//     return arr.indexOf(value);
// }


// O(n)
// const search = (arr, value) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) return i;
//     }
//     return -1;
// }


// O(log n)  binary search
const search = (arr, val) => {
    let min = 0,
        max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // let currentElement = arr[middle];

        if (arr[middle] < val) min = middle + 1;
        if (arr[middle] > val) max = middle - 1;
        if (arr[middle] === val) return middle;
    }
    return -1;
}



console.log(search([1, 2, 3, 4, 5, 6], 5));