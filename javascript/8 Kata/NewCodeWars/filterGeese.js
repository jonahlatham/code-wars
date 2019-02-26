// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

let thas = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
        birds.reduce((r,e,i,a) => {
            r = e
        }, [])
                return r.filter((e,i) => {
                    if(e.includes(thas)){
                        return false
                    }
                })
  };
  
  console.log(gooseFilter(thas))