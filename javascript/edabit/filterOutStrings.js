let str = [1, 4, 2, 'y', 6, '3', 's']

function filterList(l) {
    return l.filter((e, i) => {
        if (/\d/.test(e) !== true || Number(e) !==e) {
            return false
        } else {
            return true
        }
    })
}

console.log(filterList(str))