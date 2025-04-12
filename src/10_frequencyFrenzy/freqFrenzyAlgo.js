export const freqFrenzyAlgo = (array) => {
    // start running result at zero
    let res = 0;

    // for each num in the array of frequency changes, add to res variable
    // negative nums when added will result in subtraction
    array.forEach(num => {
        res += num;
    });

    // return res after loop executes
    return res;
}

export const freqFrenzyAlgoString = `
const freqFrenzyAlgo = (array) => {
    // start running result at zero
    let res = 0;

    // for each num in the array of frequency changes, add to res variable
    // negative nums when added will result in subtraction
    array.forEach(num => {
        res += num;
    });

    // return res after loop executes
    return res;
}
`