export const prodCheckSumAlgo = (array) => {
    // early return if empty array given
    if (array.length === 0) {
        return 0;
    }

    // store how many id's pass 2 or 3 check
    // 2 means the same letters appear twice in an id
    // 3 means the same letters appear 3 times in an id
    // one id can pass both test and add to both 2 and 3
    const store = {
        passes2: 0,
        passes3: 0
    }

    // checks if the given string "productId" contains a letter which appears exactly 2x's
    // num is the amount of letters we want to see repeated to be true (in this case either 2 or 3)
    const check = (string) => {
        // object to hold count of each letter
        const counts = {};

        //iterate string and store characters to count object
        for (const char of string) {
            // either set to 1 or prev value plus 1
            counts[char] = (counts[char] || 0) + 1
        }

        // access the values from the counts object, ie- how many times letters repeated
        const values = Object.values(counts);
        // check if any letter appear exactly 2 or 3 times
        const has2 = values.includes(2);
        const has3 = values.includes(3);

        // if either or both are true, add to the store values
        if (has2) store.passes2 += 1;
        if (has3) store.passes3 += 1;

    }

    // iterate array of productIDs
    // for each id, decide if it passes 2 letters and 3 letters checks
    // if passes one, or both, increase value in store
    array.forEach(prodId => {
        // check that prodId is not empty value
        if (prodId.length === 0) {
            return;
        }
        check(prodId);
    });

    // multiple the values of the store to get product
    let product = store.passes2 * store.passes3;

    // return product
    return product;
}

export const prodCheckSumAlgoString = `
const prodCheckSumAlgo = (array) => {
    // early return if empty array given
    if (array.length === 0) {
        return 0;
    }

    // store how many id's pass 2 or 3 check
    // 2 means the same letters appear twice in an id
    // 3 means the same letters appear 3 times in an id
    // one id can pass both test and add to both 2 and 3
    const store = {
        passes2: 0,
        passes3: 0
    }

    // checks if the given string "productId" contains a letter which appears exactly 2x's
    // num is the amount of letters we want to see repeated to be true (in this case either 2 or 3)
    const check = (string) => {
        // object to hold count of each letter
        const counts = {};

        //iterate string and store characters to count object
        for (const char of string) {
            // either set to 1 or prev value plus 1
            counts[char] = (counts[char] || 0) + 1
        }

        // access the values from the counts object, ie- how many times letters repeated
        const values = Object.values(counts);
        // check if any letter appear exactly 2 or 3 times
        const has2 = values.includes(2);
        const has3 = values.includes(3);

        // if either or both are true, add to the store values
        if (has2) store.passes2 += 1;
        if (has3) store.passes3 += 1;

    }

    // iterate array of productIDs
    // for each id, decide if it passes 2 letters and 3 letters checks
    // if passes one, or both, increase value in store
    array.forEach(prodId => {
        // check that prodId is not empty value
        if (prodId.length === 0) {
            return;
        }
        check(prodId);
    });

    // multiple the values of the store to get product
    let product = store.passes2 * store.passes3;

    // return product
    return product;
}
`