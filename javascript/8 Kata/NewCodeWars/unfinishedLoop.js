// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/solutions/javascript

function createArray(number){
    let newArray = [];
    
    for(let counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  console.log(createArray())