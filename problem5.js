function analyzeText(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return 'Invalid';
    }

    const totalWords = str.split(' ');

    let longestWord = '';
    for (let i = 0; i < totalWords.length; i++) {
        if (totalWords[i].length > longestWord.length) {
            longestWord = totalWords[i];
        }
    }

    const token = totalWords.join('').length;

    return {
        longwords: longestWord,
        token: token
    };
}

const str = ""
console.log(analyzeText(str));