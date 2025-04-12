export const LeaderBoard = ({ topScores }) => {
    // Sort and filter top 5 unique scores
    const uniqueTopFive = [...new Set(topScores)] // removes duplicates
        .sort((a, b) => b - a)                    // sort descending
        .slice(0, 5);                              // take top 5

    // Group any repeated scores with the same value as the <li> entry
    let htmlString = "<ol><h4>";
    uniqueTopFive.forEach((score) => {
        // Get all matching scores for this value
        const matchingScores = topScores.filter((s) => s === score);
        htmlString += `<li>${matchingScores.join(", ")}</li>`;
    });
    htmlString += "</h4></ol>";

    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
