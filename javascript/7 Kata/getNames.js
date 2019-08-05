// https://www.codewars.com/kata/getnames/train/javascript

let data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
  ]

function getNames(stuff){
    return stuff.map((e,i)=>{
        return e.name
    });
  }

  console.log(getNames(data))