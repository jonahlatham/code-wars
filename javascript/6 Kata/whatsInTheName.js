// https://www.codewars.com/kata/whats-in-a-name/train/javascript

let string = 'may we run kites'
function nameInStr(str, name){
    let namer = name.split('').map((e,i)=>{
        return e
    })
    let stringer = string.split('').map((e,i)=>{
        if(e === namer[i]){
        return true
    } else {
        return false
    }
})
return stringer
}
console.log(nameInStr(string, 'mark'))