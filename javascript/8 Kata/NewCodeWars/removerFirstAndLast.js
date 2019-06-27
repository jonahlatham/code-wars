let art = 'abcde fghijkl mn opqr stuvwxyz'

function array(arr) {
    if (arr.trim().length < 3) {
        return null
    } else {
        return arr.slice(1, arr.length - 1)
    }
}

console.log(array(art))