// https://www.codewars.com/kata/remove-string-spaces/train/javascript


let str = " a man walks    down    the      street  "
function noSpace(x) {
        return x.replace(/\s/g,'')
    }
    console.log(noSpace(str))