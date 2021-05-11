const input = 'Such a lovely day, and it is mine';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            if (input[i] === 'a') {
                resultArray.push('a');
            }
            if (input[i] === 'e') {
                resultArray.push('ee');
            }
            if (input[i] === 'i') {
                resultArray.push('i');
            }
            if (input[i] === 'o') {
                resultArray.push('o');
            }
            if (input[i] === 'u') {
                resultArray.push('uu');
            }
        }
    }
}

console.log(resultArray.join('').toUpperCase());
