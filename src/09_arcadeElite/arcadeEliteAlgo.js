export const arcadeEliteAlgo = (topScores, newScores) => {
    // Response object - stores the final top scores and any new scores added to the leaderboard
    let response = {
        topScores: [...topScores],
        scoresAdded: []
    }

    // Early return if either input array is empty
    if (newScores.length === 0 || topScores.length === 0) {
        console.log('empty array provided. response = ', response)
        return response;
    }

    // add the two arrays together and sort descending
    const combinedArr = [...topScores, ...newScores].sort((a, b) => b - a)

    // empty object - will group scores by their value (used to detect ties)
    const scoreCounts = {};
    combinedArr.forEach(score => {
        if (!scoreCounts[score]) {
            scoreCounts[score] = [];
        }
        scoreCounts[score].push(score);
    })

    // get top 5 unique scores, sorted descending order
    const sortedScores = Object.keys(scoreCounts)
        .map(Number)
        .sort((a, b) => b - a)
        .slice(0, 5)

    // build ranked groups of scores (including ties)
    const rankedGroups = [];
    sortedScores.forEach((score, index) => {
        rankedGroups[index] = scoreCounts[score];
    })

    // Check each new score submitted by user, and add to response.scoresAdded if it appears in the updated top 5
    newScores.forEach((ns) => {
        sortedScores.map((score) => { return score === ns ? response.scoresAdded.push(ns) : null })
    });

    // flatten any nested arrays from rankedGroups into single array (instructions ask for)
    response.topScores = rankedGroups.flat();

    return response;
}

export const arcadeEliteAlgoString = `
const arcadeEliteAlgo = (topScores, newScores) => {
    // Response object - stores the final top scores and any new scores added to the leaderboard
    let response = {
        topScores: [...topScores],
        scoresAdded: []
    }

    // Early return if either input array is empty
    if (newScores.length === 0 || topScores.length === 0) {
        console.log('empty array provided. response = ', response)
        return response;
    }

    // add the two arrays together and sort descending
    const combinedArr = [...topScores, ...newScores].sort((a, b) => b - a)

    // empty object - will group scores by their value (used to detect ties)
    const scoreCounts = {};
    combinedArr.forEach(score => {
        if (!scoreCounts[score]) {
            scoreCounts[score] = [];
        }
        scoreCounts[score].push(score);
    })

    // get top 5 unique scores, sorted descending order
    const sortedScores = Object.keys(scoreCounts)
        .map(Number)
        .sort((a, b) => b - a)
        .slice(0, 5)

    // build ranked groups of scores (including ties)
    const rankedGroups = [];
    sortedScores.forEach((score, index) => {
        rankedGroups[index] = scoreCounts[score];
    })

    // Check each new score submitted by user, and add to response.scoresAdded if it appears in the updated top 5
    newScores.forEach((ns) => {
        sortedScores.map((score) => { return score === ns ? response.scoresAdded.push(ns) : null })
    });

    // flatten any nested arrays from rankedGroups into single array (instructions ask for)
    response.topScores = rankedGroups.flat();

    return response;
}
`