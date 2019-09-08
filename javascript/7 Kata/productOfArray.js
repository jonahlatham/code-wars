
// https://www.codewars.com/kata/product-of-array-items/train/javascript

let arr = [1,2,3,4,5]
function product(values) {
    if(values.length>=1 || values === null){
        return values.reduce((r,e,i)=>{
            return r*=e
        },1)
    } else {
        return null
    }
  }

  console.log(product(arr)) 