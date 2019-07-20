// https://www.codewars.com/kata/row-weights/train/javascript

let arr = [12,23,64,1,28,61,83,19,10,45]

function rowWeights(array){
    let newArray = []
    let team1 = array.reduce((r,e,i)=>{
        if(i%2===0){
            r+=e
        }
        return r
    }, 0)
    let team2 = array.reduce((r,e,i)=>{
        if(i%2!==0){
            r+=e
        }
        return r
    },0)
    newArray.push(team1, team2)
    return newArray
  }

  console.log(rowWeights(arr))