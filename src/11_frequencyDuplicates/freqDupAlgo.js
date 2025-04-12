export const freqDupAlgo = (array) => {
    // Variable to hold the current frequency total
    let frequency = 0;
    // Iterator for array looping
    let count = 0;
    // Bool used for while loop
    let duplicateFound = false;
    // Object to keep track of all frequencies we’ve seen so far
    const previousFrequencies = {};

    // Continuously loop through the array, adding values to frequency until a duplicate frequency is found
    while (!duplicateFound) {
        // Get the current number from the array
        let val = array[count];

        // Add the current value to our running total frequency
        frequency += val;

        // Check if we've seen this frequency before
        if (!previousFrequencies[frequency]) {
            // If not, store it in the table
            previousFrequencies[frequency] = true;
        } else {
            // If already seen, set flag to break loop
            duplicateFound = true;
        }

        // Move to the next index in the array
        count++;

        // If we reach the end of the array, loop back to the start
        if (count === array.length) {
            count = 0;
        }
    }

    return frequency;
}

export const freqDupAlgoString = `
const freqDupAlgo = (array) => {
    // Variable to hold the current frequency total
    let frequency = 0;
    // Iterator for array looping
    let count = 0;
    // Bool used for while loop
    let duplicateFound = false;
    // Object to keep track of all frequencies we’ve seen so far
    const previousFrequencies = {};

    // Continuously loop through the array, adding values to frequency until a duplicate frequency is found
    while (!duplicateFound) {
        // Get the current number from the array
        let val = array[count];

        // Add the current value to our running total frequency
        frequency += val;

        // Check if we've seen this frequency before
        if (!previousFrequencies[frequency]) {
            // If not, store it in the table
            previousFrequencies[frequency] = true;
        } else {
            // If already seen, set flag to break loop
            duplicateFound = true;
        }

        // Move to the next index in the array
        count++;

        // If we reach the end of the array, loop back to the start
        if (count === array.length) {
            count = 0;
        }
    }

    return frequency;
}
`
