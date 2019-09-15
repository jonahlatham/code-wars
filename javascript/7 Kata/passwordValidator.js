// https://www.codewars.com/kata/password-validator/train/javascript

let pswrd1 = 'helloworld'
let pswrd2 = 'Hell0wor1d'

function password(str) {
    let letterNumber = /^[0-9a-zA-Z]+$/;
    let num = /\d+/
    let up = /[A-Z]/
    let low = /[a-z]/
    if (str.match(num) && str.match(up) && str.match(low) && str.length >= 8) {
        return true;
    } else {
        return false;
    }
}

console.log(password(pswrd1))
console.log(password(pswrd2))


//      BEST PRACTICE
// function password(str) {
//     return str.length >= 8 &&
//            /[a-z]/.test(str) &&
//            /[A-Z]/.test(str) &&
//            /\d/.test(str);
// }