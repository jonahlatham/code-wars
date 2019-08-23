
let string = 'abcd'

function capitalize(s) {
    let str = s.split('')
    let strin = str.map((e, i) => {
        if (i % 2 !== 0) {
            return e.toUpperCase()
        } else {
            return e
        }
    })
    let srin = str.map((e,i)=>{
        if (i % 2 === 0) {
            return e.toUpperCase()
        } else {
            return e
        }
    })
    let bigArr = []
    bigArr.push(srin.join(''))
    bigArr.push(strin.join(''))
    return bigArr
};
    let bigArr = []
    bigArr.push(strin)
    bigArr.push(srin)
    return bigArr
};

console.log(capitalize(string))