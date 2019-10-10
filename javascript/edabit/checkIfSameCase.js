
function sameCase(str) {
	if(str.toUpperCase()===str || str.toLowerCase()===str){
        return true
    } else {
        return false
    }
}

console.log(sameCase('hello'))
console.log(sameCase('hElLo'))
console.log(sameCase('HELLO'))
console.log(sameCase('hEllo'))