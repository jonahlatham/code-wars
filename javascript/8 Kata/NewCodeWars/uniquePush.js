// https://www.codewars.com/kata/uniquepush-no-dupes/train/javascript

let object = {
        name: 'Jonah',
        phone: 8108675309,
}
let array = [
    {
        name: 'Aaron',
        phone: 8008675309,
    },
]

function uniquePush(arr, obj) {
if(obj.phone.toString().includes(array[0].phone.toString())){
    return false
} else {
    arr.push(obj)
}
return arr
}
console.log(object.phone)
console.log(array[0].phone)
console.log(uniquePush(array, object))