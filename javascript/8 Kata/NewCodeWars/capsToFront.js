
const string = 'heLoWoRld'

function moveCaps(str){
    return str.split('').filter((e,i)=>{
        if(e === e.toUpperCase()){
            return true
        } else {
            return false
        }
    }).join('') + str.split('').filter((e,i)=>{
        if(e === e.toLowerCase()){
            return true
        } else {
            return false
        }
    }).join('')
}

console.log(moveCaps(string))