function getSize(width, height, depth){
    let arr = []
    let volume = (height * width * depth)
    const area = (2*(height*width) + 2*(height*depth) + 2*(width*depth))
    arr.push(area)
    arr.push(volume)
    return arr
}


console.log(getSize(12, 40, 21))