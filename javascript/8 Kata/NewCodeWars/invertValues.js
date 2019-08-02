let arr = [1,2,3,4,5]
function invert(array) {
    return array.map((e,i)=>{
        return e *-1
    })
 }

 console.log(invert(arr))