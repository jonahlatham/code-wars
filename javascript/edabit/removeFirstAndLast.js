
function removeFirstLast(str) {
    if(str.length>2){
    return str.slice(1,str.length-1)
    } else {
        return str
    }
}

console.log(removeFirstLast('hello'))