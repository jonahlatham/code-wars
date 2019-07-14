let arr = [29, 7, 8, 19, 2, -4]
function difference(nums) {
    let array = nums.sort((a,b)=>{return a-b})
    return array[array.length-1] - array[0]
}

console.log(difference(arr))