

let rentalCarCost = (n) => {
    let totalCost = n * 40
    if (n >= 7) {
        return totalCost - 50
    } else if (n >= 3) {
        return totalCost - 20
    } else {
        return totalCost 
    }
}


console.log(rentalCarCost(4))
