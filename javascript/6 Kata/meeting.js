
let string = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"

function meeting(s) {
    let strArr = s.split(';')
    let stringer = strArr.reduce((r, e, i) => {
        let names = e.split(':')
        r.push({ firstName: names[0], lastName: names[1] })
        return r
    }, [])
    let sortedArr = stringer.sort((a, b) => {
        if (a.lastName > b.lastName) {
            return 1
        } else {
            return -1
        }
    })
    return sortedArr.reduce((r,e,i)=>{ 
        let name = `(${e.lastName.toUpperCase()}, ${e.firstName.toUpperCase()})`
        r.push(name)
        return r
    },[]).join('')
}

console.log(meeting(string))