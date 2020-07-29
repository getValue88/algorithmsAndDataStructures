const pivot = (arr, start = 0, end = arr.length - 1) => {
    let count = 0;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] <= arr[start]) {
            count++;
            if (i !== start + count) {
                let temp = arr[start + count];
                arr[start + count] = arr[i];
                arr[i] = temp;
            }
        }
    }
    if (count > 0) {
        temp = arr[start];
        arr[start] = arr[start + count];
        arr[start + count] = temp;
    }
    return start + count;
}

// console.log(pivot([26, 23, 17, 44, 27, 22, 47, 39, 42, 43, 1]));


// best/avg : O(n log n)
// worst: O(n2)
// space: O(log n)
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([26, 23, 17, 44, 27, 22, 47, 39, 42, 43, 1]));