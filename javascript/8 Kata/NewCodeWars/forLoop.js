

function pickIt(arr){
    var odd=[],even=[];
    for(let i=0; i<=arr.length; i++){
        if(arr[i]%2===0){
            even.push(arr[i])
        } else if(arr[i]===undefined){
            return [odd, even]
        } else {
            odd.push(arr[i])
        }
    }
    return [odd,even];
  }
  console.log(pickIt([1,2,3,54,6,54,3,77,45,434,4321,887]))

  //why we use map

//   function pickIt2(array){
//     let odd=[]
//     let even=[]
//     array.map((e,i)=>{
//           if(e%2===0){
//             even.push(e)
//           } else {
//               odd.push(e)
//           }
//       })
//       return [odd,even]
//   }

//   console.log(pickIt2([1,4,5,6,7,8,9,76,15,434,45,87]))