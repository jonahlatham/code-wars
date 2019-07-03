let array1 = ['a', 'a', 'b', 'b']
let array2 = ['a', 'c', 'b', 'd']

function tester(arr1,arr2){
    let answer = arr1.reduce((r,e,i) => {
      if(e===arr2[i]){
        r+=4
      } else if(e !== arr2[i] && e !== ''){
        r-=1
      }
      return r
    },0)
    return answer > 0 ? answer : 0
  }
  console.log(tester(array1, array2))