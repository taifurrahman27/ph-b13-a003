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
const array = ["ha", "ha", "ha", "na"]
console.log(gonoVote(array));