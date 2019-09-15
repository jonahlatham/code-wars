
function makeChange(crud, money, items) {
    switch (crud) {
        case 'candy':
            return money - (1.42 * items);
        case 'chips':
            return money - (2.40 * items);
        case 'soda':
            return money - (1.00 * items);
        default:
            return 0
    }
}

console.log(makeChange('candy', 10, 3))