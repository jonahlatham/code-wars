// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

let string = 'this reversed word is reversed'

function spinWords(str){
    let wordiness = str.split(' ').map((e,i)=>{
        if(e.length >=5){
            return e.split('').reverse().join('')
        } else {
            return e
        }
    })
    return wordiness.join(' ')
  }

  console.log(spinWords(string))