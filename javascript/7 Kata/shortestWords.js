// https://www.codewars.com/kata/shortest-word/train/javascript

let string = 'hello world how are you'

function findShort(s){
    let st = s.split(' ')
    let str = st.map((e,i)=>{
        return e.length
    })
    return str.sort((a,b)=>{return a-b})[0]
}

console.log(findShort(string))