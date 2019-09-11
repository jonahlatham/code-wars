
function addLetters(...letters) {

    let newLet = letters.map((e,i,a)=>{
           return String.fromCharCode(97 + String.fromCharCode(e));
    })
    return newLet
}

console.log(addLetters('a', 'b', 'c'))