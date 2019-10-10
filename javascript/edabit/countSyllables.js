function numberSyllables(word) {
    let newWord = word.split('-')
    return newWord.length
}

console.log(numberSyllables("on-o-mat-o-poe-ia"))