//helper function
const merge = (arr1, arr2) => {
    let results = [],
        i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}


// console.log(merge([2, 5, 6, 7, 90, 120],[100]));


//sort algorithm O(n log n)
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}


console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));