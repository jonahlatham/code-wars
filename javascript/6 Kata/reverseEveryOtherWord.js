let string = 'Hello big world'
let str2 = 'this is the string to be reversed '

function reverse(str){
    let realRev = str.split(' ').map((e,i)=>{
        if(i%2!==0){
            return e.split('').reverse().join('')
        } else {
            return e
        }
    })
    return realRev.join(' ').trim()
}

console.log(reverse(str2))