// function stray(numbers) {
    //     // numbers
    //     numbers.map((e,i)=>{
        //         if(e.indexOf())
        //     })
        //   }
        
        //   console.log(stray(arr))
        
        let arr = [2,2,2,2,2,2,3,2,2]

  let method1 = function(a) {
    for(let i = 0; i <= a.length; i++) {
        for(let j = i; j <= a.length; j++) {
            if(i != j && a[i] == a[j]) {
                console.log(a[j])
                return a.slice();
            }
        }
    }
    return false;
}
console.log(method1(arr))