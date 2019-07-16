let string = 'Hello world around us and others' // 5
function addLength(str) {
    let strs = str.split(' ')
    return strs.map((e,i,a)=>{
        return a[i] + ' ' + a[i].split('').length
    })
    }
    
console.log(addLength(string))