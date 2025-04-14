export const prodMatchingAlgo = (array) => {
    // early return if no data inside of array
    if (array.length == 0) {
        return "No data submitted."
    }

    // variable to return 
    let response = "";

    // outer loop to select ids one at a time
    for (let i = 0; i < array.length; i++) {
        // inner loop to compare current id to all other ids, start at i + 1 instead of 0 since index i and before, do not need to be checked again
        for (let j = i + 1; j < array.length; j++) {
            // id strings converted to arrays to check values
            let id1 = array[i].split("");
            let id2 = array[j].split("");

            // store how many mismatches and what index the mismatch occurs (if we get more than 1, we will continue to next id)
            let mismatchCount = 0;
            let mismatchIndex = -1;

            // check indexes from id1 and id2, if more than one mismatch found, return to go to next id
            for (let k = 0; k < id1.length; k++) {
                if (id1[k] !== id2[k]) {
                    mismatchCount++;
                    mismatchIndex = k;
                    if (mismatchCount > 1) break;
                }
            }

            //  if criteria is met, remove the matching letter and return remaining string
            if (mismatchCount == 1 && mismatchIndex >= 0) {
                id1.splice(mismatchIndex, 1);
                response = id1.join("");
                return response;
            }

        } // end of inner loop
    } // end of outer loop

    // if no id's meet criteria, return default message to user.
    return "No Matches Found"
}

export const prodMatchingAlgoString = `
const prodMatchingAlgo = (array) => {
    // early return if no data inside of array
    if (array.length == 0) {
        return "No data submitted."
    }

    // variable to return 
    let response = "";

    // outer loop to select ids one at a time
    for (let i = 0; i < array.length; i++) {
        // inner loop to compare current id to all other ids, start at i + 1 instead of 0 since index i and before, do not need to be checked again
        for (let j = i + 1; j < array.length; j++) {
            // id strings converted to arrays to check values
            let id1 = array[i].split("");
            let id2 = array[j].split("");

            // store how many mismatches and what index the mismatch occurs (if we get more than 1, we will continue to next id)
            let mismatchCount = 0;
            let mismatchIndex = -1;

            // check indexes from id1 and id2, if more than one mismatch found, return to go to next id
            for (let k = 0; k < id1.length; k++) {
                if (id1[k] !== id2[k]) {
                    mismatchCount++;
                    mismatchIndex = k;
                    if (mismatchCount > 1) break;
                }
            }

            //  if criteria is met, remove the matching letter and return remaining string
            if (mismatchCount == 1 && mismatchIndex >= 0) {
                id1.splice(mismatchIndex, 1);
                response = id1.join("");
                return response;
            }

        } // end of inner loop
    } // end of outer loop

    // if no id's meet criteria, return default message to user.
    return "No Matches Found"
}
`