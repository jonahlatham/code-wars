// https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/train/javascript

function boolToWord( bool ){
  if (bool === true){
      return 'Yes'
  } else {
      return 'No'
  }
}

console.log(boolToWord(2+2===4))