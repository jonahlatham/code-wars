// https://www.codewars.com/kata/55a5bfaa756cfede78000026/solutions/javascript

function problem(x){
    if (typeof x === 'string' || x instanceof String){
        return 'Error'
    } else {
        return x * 50 + 6
    }
}

console.log(problem(54))