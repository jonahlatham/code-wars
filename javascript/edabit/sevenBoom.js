let array = [1, 2, 3, 4, 5, 6, 7]

function sevenBoom(arr) {
    let newArr = arr.join('')
    Number(newArr)
    if (newArr.includes(7)) {
        return "Boom!"
    } else {
        return "there is no 7 in the array"
    }
}

console.log(sevenBoom(array))