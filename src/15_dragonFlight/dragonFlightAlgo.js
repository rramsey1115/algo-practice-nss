export const dragonFlightAlgo = (array, target) => {
    // check for valid data before executing function
    if (array.length === 0 || isNaN(target)) {
        return ["Invalid Input."];
    }

    // iterate array with nested loop to check all values against all others
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // convert both values to numbers
            let val1 = Number(array[i]);
            let val2 = Number(array[j]);

            // skip if either value is not a number, to continue with function and not crash
            if (isNaN(val1) || isNaN(val2)) continue;

            // return the first two numbers which add up to target num
            if (val1 + val2 === Number(target)) {
                return [val1, val2]
            }
        }
    }

    // default if no results found - front end handles this and conditionally renders message
    return ["No Collisions! Fly King, Fly!"]
}

export const dragonFlightAlgoString = `
const dragonFlightAlgo = (array, target) => {
    // check for valid data before executing function
    if (array.length === 0 || isNaN(target)) {
        return ["Invalid Input."];
    }

    // iterate array with nested loop to check all values against all others
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // convert both values to numbers
            let val1 = Number(array[i]);
            let val2 = Number(array[j]);

            // skip if either value is not a number, to continue with function and not crash
            if (isNaN(val1) || isNaN(val2)) continue;

            // return the first two numbers which add up to target num
            if (val1 + val2 === Number(target)) {
                return [val1, val2]
            }
        }
    }

    // default if no results found - front end handles this and conditionally renders message
    return ["No Collisions! Fly King, Fly!"]
}
`