let array = [53, 182, 435, 591, 637]

function unlucky13(nums) {
    return nums.filter((e) => {
        if (e % 13 !== 0) {
            return true
        } else return false
    })
}

console.log(unlucky13(array))