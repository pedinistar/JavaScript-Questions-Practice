const sentence = "The quick brown fox jumps over the lazy dog."
const upperCaseSentence = sentence.toUpperCase()
console.log(upperCaseSentence);


const fox = sentence.indexOf("fox")
// fox = 16

const foxLength = "fox".length
// foxLength = 3

let extractedWord = sentence.slice(fox, fox + foxLength)

console.log(extractedWord);


let newSentence = sentence.replace("lazy","active")
console.log(newSentence);

