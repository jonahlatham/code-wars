

function equalSlices(total, people, each) {
	if(people*each<=total){
        return true
    } else {
        return false
    }
}

console.log(equalSlices(11, 5, 3))
console.log(equalSlices(8, 3, 2))
console.log(equalSlices(24, 12, 2))