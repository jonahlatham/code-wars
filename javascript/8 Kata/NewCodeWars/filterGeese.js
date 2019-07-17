// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7


let birdies = ['this', 'that', 'these', 'those', "African", "Roman Tufted", "Toulouse"]
function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((e, i) => {
        return !geese.includes(e)
    })
};
console.log(gooseFilter(birdies))
