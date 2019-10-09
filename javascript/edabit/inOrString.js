
function intOrString(param) {
    let reg = new RegExp('^[0-9]+$');
    if (/\d/.test(param) === true) {
        return 'int'
    } else {
        return 'str'
    }
}

console.log(intOrString(1))
console.log(intOrString('string'))
console.log(intOrString(1))