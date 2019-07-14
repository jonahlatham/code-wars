let array = ['jonah', 'josh', 'lauren', 'eli', 'calvin']

function arrSearch(arr){
    let index = arr.indexOf('eli')
    return arr[index].charAt(0).toUpperCase() + arr[index].slice(1)
}
console.log(arrSearch(array))