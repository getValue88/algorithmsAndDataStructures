// "frequency counter pattern"

const validAnagram = (str, str2) => {
    if (str.length !== str2.length) return false;

    const objStr1 = {};

    for (let char of str) {
        objStr1[char] ? objStr1[char]++ : objStr1[char] = 1;
    }

    for (let char of str2) {
        if (!objStr1[char]) return false;

        objStr1[char]--;
    }

    return true;
}

console.log(validAnagram('texttwisttime', 'timetwisttext'));