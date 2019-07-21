// https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/javascript

let array = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,1,2,3,4,5,6,7,8,9,10]
let str =[1234,534,534,121,42,64,9,11,21,342]

function menFromBoys(arr){
    let men = []
    let boys = []
    let loop = arr.map((e,i)=>{
        if(e%2===0){
            men.push(e)
        } else {
            boys.push(e)
        }
    })
    return men.sort((a,b)=>{a-b}).concat(boys.sort((a,b)=>{a-b}).reverse())
}
console.log(menFromBoys(array))