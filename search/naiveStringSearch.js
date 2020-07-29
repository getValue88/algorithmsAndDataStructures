const naiveStringSearch = (string, str) => {
    let ocurrences = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (string[i + j] !== str[j]) break;

            if (j === str.length - 1) {
                ocurrences++;
            }
        }
    }
    return ocurrences;
}

console.log(naiveStringSearch('hola que pasa pasa hola que onda my friend?', '?'));