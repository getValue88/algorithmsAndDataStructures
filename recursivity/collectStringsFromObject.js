function collectStrings(obj) {
    let arr = [];

    for (let key in obj) {
        if (typeof (obj[key]) === 'object' || Array.isArray(obj[key])) {
            arr = arr.concat(collectStrings(obj[key]));
        }
        if (typeof (obj[key]) === 'string') {
            arr.push(obj[key])
        }
    }
    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));
// collectStrings(obj)
 // ["foo", "bar", "baz"])