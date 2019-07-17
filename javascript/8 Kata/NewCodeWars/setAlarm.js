let job = true;
let party = false;

function setAlarm(employed, vacation){
if(employed === true && vacation === false){
    return true
} else {
    return false
}
}

console.log(setAlarm(job, party))