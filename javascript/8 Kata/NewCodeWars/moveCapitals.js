let str = 'hElLO'
function capToFront(s) {
	let sUpp = s.split('').filter((e,i)=>{
        if(e !== e.toLowerCase()){
            return true
        }
    })
            let sLow = s.split('').filter((e,i)=>{
                if(e !== e.toUpperCase()){
                    return true
                }
            })
    return sUpp.join('') + sLow.join('')
}
console.log(capToFront(str))