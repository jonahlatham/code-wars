let array = ['abba', 'abba', 'alexander', 'andPeggy', 'andPeggy']

function removeDups(arr) {
    return [...new Set(arr)];
}

console.log(removeDups(array))