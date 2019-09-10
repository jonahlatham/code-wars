let arr1 = ['hello', 'darkness', 'my', 'old', 'friend']

function filterFrenz(arr) {
    let arr2 = ['hello', 'friend']
    let filtArr = arr.filter((e,i)=>{
        if(arr2.includes(e)){
            return true
        } else {
            return false
        }
    })
    return filtArr
}

console.log(filterFrenz(arr1))