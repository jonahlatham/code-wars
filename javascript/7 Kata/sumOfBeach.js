// https://www.codewars.com/kata/sum-of-a-beach/train/javascript
let string = 'sun sun sun sun water beach sun'
let items = ['sun', 'water', 'sand', 'fish']
function sumOfABeach(beach) {
    let answer = 0
    items.filter((e,i)=>{
        if(beach.includes(e)){
            return answer =+ 1
        }
    })
    return answer
}
console.log(string.split(' '))
console.log(sumOfABeach(string))
