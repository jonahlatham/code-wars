function retrieveMajor(semver) {
    let arr = semver.split('.')
    return arr[0]
}

function retrieveMinor(semver) {
    let arr = semver.split('.')
    return arr[1]
}

function retrievePatch(semver) {
    let arr = semver.split('.')
    return arr[2]
}

console.log(retrieveMajor('6.1.9'))
console.log(retrieveMinor('6.1.9'))
console.log(retrievePatch('6.1.9'))
