let a = 'A'
f=(s)=>{
    if(s===s.toUpperCase() && s.length <= 9){
        return true
    } else {
        return false
    }
}
console.log(f(a))