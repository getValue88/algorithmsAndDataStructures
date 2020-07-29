// "multiple pointers pattern"

const sumZero = (arr) => {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum > 0) right--;
        if (sum < 0) left++;

        if (sum === 0) return [arr[left], arr[right]];
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 5, 10]));