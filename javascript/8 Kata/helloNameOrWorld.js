// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name){
  if(name){
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}`
  } else {
    return 'hello world'
  }
    }
  
    console.log(hello('jack'))
    
