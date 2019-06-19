
// function wordChanger (str) {
//     const words = str.split(' ');
//     return words.map((e)=>{
//         console.log(e)
//    return e.charAt(0) + e.slice(1).toUpperCase()
// }).join(' ')
// }
//    console.log(wordChanger('hello my name is go'))

//    function wordChange(str){
//        const answer = []
//        const words = str.split(' ')
//        for(i=0;i<words.length;i++){
//            answer.push(words[i].charAt(0).toLowerCase() + words[i].slice(1).toUpperCase())
//             console.log(i)
//             console.log(words[i].slice(1))
//         }
//        return answer.join()
//    }

//    console.log(wordChange('Hello World Where Do yo want to Fly off To'))

// let array1 = [ 
//     {
//         name: 'jonah',
//         age: 21,
//         eyeColor: 'brown'
//     },
//     {
//         name: 'lauren',
//         age: 22,
//         eyeColor: 'dark brown'
//     },
//     {
//         name: 'josh',
//         age: 26,
//         eyeColor: 'blue'
//     },
//     {
//         name: 'eli',
//         age: 2,
//         eyeColor: 'brown'
//     },
//     {
//         name: 'jonah jr.',
//         age: 0,
//         eyeColor: 'unknown'
//     },
// ]

// function sorting (arr) {
    // const answer = arr.reduce((r, e,i,a) => {
    //     if(e.age >= 21){
    //         r.push(`${e.name} get lit`)
    //     }
    //      return r;
    // }, [])
//     const answer =[];
//     for(let i = 1; i< 101; i+=3){
//         answer.push(i);
//     }
//     return answer
// }
// const stuff ='I like butt'
// function addIts(a, b) {
//     let answer = []
//     for(i=0; i<a; i++){
//         answer.push(b)
//     }
//     return answer
// }

// console.log(addIts(6,8))

// let array = [ 1,2,3,4,5,6,7,8,9,10]

// function random (arr) {
//     return arr.map((e,i,a) => {
//         return Math.floor(Math.random() * e)
//     })
// }
// console.log(random(array))








// function isSpace(cap, on, wait){

//     if(on + wait > cap) {
//         console.log((on+wait)-cap)
//         return `${(on+wait)-cap} will have to wait`
//     } else {
//         console.log((on+wait)-cap)
//         return `${(cap-on)} people can get on`
//     }

// }

// console.log(isSpace(10, 5, 5))

// const stuff = [[1,2,3], ['a', 'b','c']]
// console.log(stuff[1][1])
// let name = 'sam harris';

// function abbrevName(name) {
//     const nameArr = name.split(' ');
//     return `${nameArr[0].charAt(0).toUpperCase()}.${nameArr[1].charAt(0).toUpperCase()}`
// }


// // best answer 
// function abbrevName(name){
//     return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
//   }


// function grow(x){
//     return x.reduce((r,e,i,a) => {
//         r *= e
//     return r
//     }, 1)
// }

// console.log(redooce([1, 2, 3, 4]))


//////
//////
//////


// function remove(s,n){
//     let count = n;
//         // return s.replace('!', s.repeat(s.substr(n)))
//         return s.split('').reduce((r, e)=>{
            
//             if(e !== '!' || count < 1){
//                 r.push(e)
//             }else{
//                 count--
//             }
//             return r;
//         }, []).join('');
    
//   }
//   console.log(remove('!hi!', 1))


//////
//////
//////
//////


//          FOR CODE WARS GITHIB
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c
//  check!!

// function sum (arr) {
//     if(arr != null){

//         return arr.reduce((r,e,i,a) => {
//             return r += e
//         }, 0)
//         return r
//     } else {
//         return 0
//     }
// }
// console.log(sum([1,3,,6,4,6,3,-10,43,-765,98,8765,-567,-2345,-5555,400, -37]))



// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
    //nope...

// function filterGeese(arr){
//     return arr.filter((e,i,a) => {
//         if (arr.includes('geese') == true){
//             return 
//         }
//     }
// }
// console.log(filterGeese())



//https://www.codewars.com/kata/opposite-number/train/javascript
//check!

// function opposite(a){
//     return -a
// }
// console.log(opposite(35))

// https://www.codewars.com/kata/function-1-hello-world/train/javascript
//check!!

// const today = new Date ();
// function time () {
//     if (today.getHours <= 12){
//     return today.getHours() + ':' + today.getMinutes()
// } else if (today.getHours() === 0){
//     return 12 + ':' + today.getMinutes()
// } else {
//     return today.getHours()-12 + ':' + today.getMinutes()
// }
// }


// console.log(time())
// const hello = (x) => {
//     return `Hello World right now it is ${time()} on ${today.getMonth()}/${today.getDate()}!`
// }

// console.log(hello())


// https://www.codewars.com/kata/577ff15ad648a14b780000e7
//check!!

// let language = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
// }

// function languageArt(arr) {
//     return Object.keys(arr).map((e,i,a) => {
//         return `In the ${e.charAt(0).toUpperCase() + e.slice(1)} language people says ${language[e]}`
//     })
// }
// console.log(languageArt(language))





// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
            // fail

// let sheep = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf']

// function wolfScope (arr) {
//     let mapper = arr.map((e,i) => {
//         if(arr.indexOf('wolf') === arr[i].length){
//             return 'go away wolf'
//         } else {
//             return `sheep number ${arr.indexOf('wolf')} you are about to get eaten!`
//         }
//     })

//     return mapper
// }

// console.log(wolfScope(sheep))


// https://www.codewars.com/kata/will-there-be-enough-space/train/javascript
                // fail!!!

// function seats(a,b,c){
//     if(a >= b+c){
//         return `we can hold ${b+c-a} people`
//     } else {
//         return `${(b+c-a)} people will have to wait`
//     }
// }
// console.log(seats(100,60,50))


// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
            // fail!!!
// function elevator(left, right, call){
//     return Math.abs(call - left) >= Math.abs(call - right) ? 'right' : 'left'
// }
// console.log(elevator(1,1,2))



// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//check!!

// function sheep(a){
//     let arr1 = []
//     for(let i = 1; i <= a; i++){
//         arr1.push(`${i} sheep... `)
//     }
//         return arr1.join('')
// }
// console.log(sheep(68))



// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
// cprrect!!!

// function dayTime(x){
//     if(x===1){
//         return 'Sunday'
//     } else if(x===2){
//         return 'Monday'
//     } else if(x===3){
//         return 'Tuesday'
//     } else if(x===4){
//         return 'Wednesday'
//     } else if(x===5){
//         return 'Thursday'
//     } else if(x===6){
//         return 'Friday'
//     } else if(x===7){
//         return 'Saturday'
//     } else {
//         return 'Wrong, please enter a number between 1 and 7'
//     }
// }

            //fail!!!!
// function dayTime(arr,i){
//     let week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
//     return arr.reduce((r,e,i,a) => {
//        return i+1
//     },0)
//     return i
// }
// console.log(dayTime('week', 5))



// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7
            // fail!!!!

// function oppositeDay(a,b){
//     if(a.toUpperCase() === true && b.toLowerCase() === true){
//         return true
//     } else if (a.toLowerCase() === true && b.toUpperCase() === true){
//         return true
//     } else if()
// }
// console.log(oppositeDay('ab', 'AB'))


// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
//correct!!!

// function grade(x, y){
//     if(x>90 || y>10){
//         return 100
//     } else if(x>75 && y>=5){
//         return 90
//     } else if(x>50 && y>=2){
//         return 75
//     } else {
//         return 0
//     }
// }
// console.log(grade(50, 1))


// https://www.codewars.com/kata/563c13853b07a8f17c000022

// function isToday(a){
//     if (a === new date()){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isToday())


// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// numnber 1

// let moonys = [1,2,4,5,3,4]
// let nips = 'hello world'

// function isArray(arr) {
//     if(arr.includes([]) === true){
//         return 'is an array'
//     } else {
//         return 'is not an array'
//     }
// }
// console.log(isArray(nips))


// https://www.codewars.com/kata/53b2f6934a240823f4000abc

// let obj1 = [
//     {
//         name:'jonah',
//         phone: 5048675309
//     },
//     {
//         name:'josh',
//         phone: 8018675309
//     },
//     {
//         name:'lauren',
//         phone: 4078675309
//     }
// ]

// function uniquePush(arr){
//    return arr.map((e,i,a) => {
//        return e.name
//    })
// }
// console.log(uniquePush(onj1))

// https://www.codewars.com/kata/562926c855ca9fdc4800005b
//CHECK

///Banned!!!
// function numberToPower(number, power) {
//     return Math.pow(number, power)
// }

// console.log(numberToPower(3,2))

// function numberToPower(number, power){
//     let arr = 1
//     for(let i=0; i < power; i++){
//         arr *= number
//     } 
//     return arr
//     // return arr.forEach((e,i) => {
//     //     return e
//     // })
// }
// console.log(numberToPower(2, 3))



// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
//  CHECK!!!

// function removeChar(str){
 
//     return str.slice(1, str.length-1)

// };

// console.log(removeChar('hello'))



// https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

// let arr = [
//     'sheep',
//     'sheep',
//     'sheep',
//     'sheep',
//     'cow',
//     'sheep',
//     'sheep',
//     'sheep',
//     'sheep',
// ]
// let arr2 = [
//     'cow', 'dog', 'sheep', 'sheep', 'cat', 'sheep'
// ]

// function countSheeps(arrayOfSheep) {
//     let counter = arrayOfSheep.map((e,i) => {
//         if(e.includes('sheep')){
//             return true
//         } else {
//             return false
//         }
//     })
//     return counter
// }

// console.log(countSheeps(arr2))






// https://www.codewars.com/kata/function-3-multiplying-two-numbers/train/javascript


// function multiply (a, b) {
//     return a * b
// }

// console.log(multiply(4, 3))



// https://www.codewars.com/kata/find-the-remainder/train/javascript
//    FAIL

// function remainder(a, b){
// return a%b    
// }
// console.log(remainder(7, 2))