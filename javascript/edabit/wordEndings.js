let array = ["clever", "meek", "hurried", "nice"]

function addEnding(arr, ending) {
    return arr.map((e, i) => {
        return e + ending
    })
}

console.log(addEnding(array, 'ly'))