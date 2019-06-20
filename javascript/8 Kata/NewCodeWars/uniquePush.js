// https://www.codewars.com/kata/uniquepush-no-dupes/train/javascript

let object = {
    name: 'Jonah',
    phoneNumber: 8008675309,
}
let array = [
    {
        name: 'Aaron',
        phoneNumber: 80308675309,
    },
]

function uniquePush(arr, obj) {
    const isNotDupe = arr.reduce((r, e, i) => {
        if (!obj.phoneNumber || e.phoneNumber === obj.phoneNumber) {
            r = false
        }
        return r
    }, true)
    if (isNotDupe) {
        arr.push(obj)
    }
    return isNotDupe
}

console.log(object.phoneNumber)
console.log(array[0].phoneNumber)
console.log(uniquePush(array, object))
console.log(array)
