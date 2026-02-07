function finalScore(omr) {
    if (typeof omr !== 'object') {
        return 'Invalid';
    }

    // const {right:rightAnswer, wrong:wrongAnwer, skip:skippedAnswer} = omr


    const rightAnswer = omr.right;
    const wrongAnwer = omr.wrong;
    const skippedAnswer = omr.skip;

    if (typeof rightAnswer !== 'number' || typeof wrongAnwer !== 'number' || typeof skippedAnswer !== 'number') {
        return 'Invalid';
    }

    const totalQuestion = rightAnswer + wrongAnwer + skippedAnswer;
    if (totalQuestion !== 100) {
        return 'Invalid';
    }

    const score = (rightAnswer * 1) + (wrongAnwer * -0.5) + (skippedAnswer * 0);

    return Math.round(score);
}

const omr = { right: 67, wrong: 23, skip: 10 }
console.log(finalScore(omr));