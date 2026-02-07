//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return 'Invalid';
    }

    if ((isNaN(currentPrice) || isNaN(discount))||(discount < 0 || discount > 100) ){
        return 'Invalid';
    }

    const discountedAmount = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountedAmount;

    return (newPrice.toFixed(3));
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof otp !== 'string') {
        return 'Invalid';
    }

    if ((otp.length !== 8) || (!otp.startsWith('ph-'))) {
        return false;
    }

    return true;
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    if (typeof omr !== 'object') {
        return 'Invalid';
    }
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

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return 'Invalid';
    }

    let haVotes = 0;
    let naVotes = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haVotes++;
        } else if (array[i] === "na") {
            naVotes++;
        }
    }

    if (haVotes > naVotes) {
        return true;
    } else if (haVotes === naVotes) {
        return "equal";
    } else {
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if (typeof str !== 'string' || str.length===0) {
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

