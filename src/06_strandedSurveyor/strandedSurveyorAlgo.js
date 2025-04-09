//  given an array of numbers
export const strandedSurveyorAlgo = (numArray) => {
    // running result of fuel needed
    let result = 0;

    // for module weight in the array, perform calculation, divide by 3, round down, then subtract 2.
    numArray.forEach((num) => {
        result += (Math.floor(num / 3) - 2)
    })
    // retun the formatted result
    return result.toLocaleString();
}

export const strandedSurveyorAlgoString = `
const strandedSurveyorAlgo = (numArray) => {
    // running result of fuel needed
    let result = 0;

    // for module weight in the array, perform calculation, divide by 3, round down, then subtract 2.
    numArray.forEach((num) => {
        result += (Math.floor(num / 3) - 2)
    })
    // retun the formatted result
    return result.toLocaleString();
}
`