// https://www.codewars.com/kata/students-final-grade/train/javascript

const finalGrade = (a, b) => {
        if(a > 90 || b > 10){
            return 100
        } else if (a > 75 && b >= 5){
            return 90
        } else if (a > 50 && b >= 2) {
            return 75
        } else {
            return 0
        }
    }

    console.log( finalGrade(80, 4))