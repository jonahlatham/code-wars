

function pickIt(arr){
    var odd=[],even=[];
    arr.map((e,i)=>{
        if(e%2===0){
            even.push(e)
        } else {
            odd.push(e)
        }
    })
    return [odd,even];
  }

  console.log(pickIt([1,2,3]))