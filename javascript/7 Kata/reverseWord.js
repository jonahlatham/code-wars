let string = 'Hello World and friends'
function reverseWords(str) {
   return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }

  console.log(reverseWords(string))