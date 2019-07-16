let string = 'Hello world' // 5
function addLength(str) {
    let strs =  str.split(' ').map((e,i)=>{
        return e[4]
    })
    return strs
    }
    
console.log(addLength(string))