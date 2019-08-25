let arr = [1,29,3,4,[4,5,7]]

function flattenAndSort(array) {
    return array.flat().sort((a,b)=>{return a-b})
  }

  console.log(flattenAndSort(arr))