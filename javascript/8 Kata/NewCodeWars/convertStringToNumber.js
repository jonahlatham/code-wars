let string = '52253367'

var stringToNumber = function(str){
    if(str.includes(1) || str.includes(2) || str.includes(3) || str.includes(4) || str.includes(5) || str.includes(6) || str.includes(7) || str.includes(8) || str.includes(9) || str.includes(0)){
        return Number(str)
    } else {
    return null;
    }
  }

  console.log(stringToNumber(string))