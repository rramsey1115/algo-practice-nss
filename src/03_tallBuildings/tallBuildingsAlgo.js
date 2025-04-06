export const tallBuildingsAlgo = (arr) => {
    // find max value provided in the array
    const maxHeight = arr.reduce((a, b) => Math.max(a, b));

    // using the max value found, find how many have that same value 
    const numOfMax = arr.filter((num) => num === maxHeight).length;

    // return an object which we can read the max height and how many have that same height
    return { maxHeight: maxHeight, numOfMax: numOfMax }
}

export const tallBuildingsAlgoString = `
const tallBuildingsAlgo = (arr) => {
    // find max value provided in the array
    const max = arr.reduce((a, b) => Math.max(a, b));

    // using the max value found, find how many have that same value 
    const numOfMaxHeight = arr.filter((num) => num === max).length;

    // return an object which we can read the max height and how many have that same height
    return { max, numOfMaxHeight }
}
`