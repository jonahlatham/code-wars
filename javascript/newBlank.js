
let totalCost = d * 50

let totalCost = (n) => {
    if (n >= 7) {
        return totalCost - 50
    } else if (n >= 3) {
        return totalCost - 20
    } else {
        return totalCost 
    }
}


console.log(totalCost(4))