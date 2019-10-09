function limitNumber(num, rangeLow, rangeHigh) {
	let arr = []
	arr.push(num, rangeLow, rangeHigh)
	arr.sort((a,b)=>{return a-b})
	return Number(arr.slice(1,arr.length-1).join())
}
console.log(limitNumber(1,4,2))