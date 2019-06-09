// https://www.codewars.com/kata/count-by-x/train/javascript

function countBy(x, y, n) {

    for(i=1; i<=y; i++){
        n.push(i*x)
    }
    return n
}

  console.log(countBy(3, 10, []))