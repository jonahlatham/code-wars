// https://www.codewars.com/kata/simple-fun-number-263-even-numbers-before-fixed/train/javascript
let sequence = [1,2,3,4,5,6,7,7,8,9,5,3,21,68,3,5,76,]

function evenNumbersBeforeFixed(seq, fixedElement) {
let evnCnt = 0
    let stuff = seq.slice(seq.indexOf(fixedElement)).map((e,i)=>{
        if(e%2===0){
            return evnCnt+=1
        }
    })
    return evnCnt
  }

  console.log(evenNumbersBeforeFixed(sequence, 4))