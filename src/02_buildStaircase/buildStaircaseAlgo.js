// algo function which will recieve a number 'n' per instructions
export const buildStaircaseAlgo = (n) => {
    // string built with backticks to maintain whitespace and new line formatting
    let string = `
          `;

    // create array of empty spaces to represent characters in string
    const strArr = Array(n).fill(" ");

    // iterate from end of array down to 0, to add characters from the end of the array 
    for (let i = strArr.length - 1; i >= 0; i--) {
        // each time through, change the entry at index of i to be a # instead of " "
        strArr[i] = "#";
        // join the array back into a string,  using new line indicator
        string += '\n' + strArr.join('');
    }
    // return the string with correct formatting to display as a staircase
    return string;
}

export const buildStaircaseAlgoString =
    `
// algo function which will recieve a number 'n' per instructions
export const buildStaircaseAlgo = (n) => {
    // string built with backticks to maintain whitespace and new line formatting
    let string = \`
          \`;

    // create array of empty spaces to represent characters in string
    const strArr = Array(n).fill(" ");

    // iterate from end of array down to 0, to add characters from the end of the array 
    for (let i = strArr.length - 1; i >= 0; i--) {
        // each time through, change the entry at index of i to be a # instead of " "
        strArr[i] = "#";
        // join the array back into a string, using new line indicator
        string += '\\n' + strArr.join('');
    }
    // return the string with correct formatting to display as a staircase
    return string;
}
`
