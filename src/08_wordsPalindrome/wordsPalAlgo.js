export const wordsPalAlgo = (string) => {
    // split word into array at each character, reverse, then join back together
    const reverse = string.split("").reverse().join("");

    // return the result of comparison (toLowerCase so that strings are equally cased)
    return string.toLowerCase() === reverse.toLowerCase();
}

export const wordsPalAlgoString = `
const wordsPalAlgo = (string) => {
    // split word into array at each character, reverse, then join back together
    const reverse = string.split("").reverse().join("");

    // return the result of comparison (toLowerCase so that strings are equally cased)
    return string.toLowerCase() === reverse.toLowerCase();
}
`