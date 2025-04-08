export const theProfessorAlgo = (array) => {
    const response = [];
    // being checked elsewhere, but added as fallback check
    if (array.length == 0) {
        return response;
    }

    // iterate array of grades
    array.forEach(grade => {
        // initiate a testNum we will use later to find nearest multiple of 5
        let testNum = grade;

        // if already failing or already divisible by 5, keep as original number
        if (grade <= 38 || grade % 5 === 0) {
            response.push(grade);
            return;
        }

        // find next number higher which is divisible by 5 - save as testNum
        while (testNum % 5 !== 0) {
            testNum++;
        }

        // decide if grade is close enough to round, add the rounded 'testNum' if so
        if (testNum - grade <= 3) {
            response.push(testNum)
        } else {
            response.push(grade);
        }
    }); // end of forEach

    return response;
}

//  this is passed to the UI to show my code solutions to users 
export const theProfessorAlgoString = `
const theProfessorAlgo = (array) => {
    const response = [];
    // being checked elsewhere, but added as fallback check
    if (array.length == 0) {
        return response;
    }

    // iterate array of grades
    array.forEach(grade => {
        // initiate a testNum we will use later to find nearest multiple of 5
        let testNum = grade;

        // if already failing or already divisible by 5, keep as original number
        if (grade <= 38 || grade % 5 === 0) {
            response.push(grade);
            return;
        }

        // find next number higher which is divisible by 5 - save as testNum
        while (testNum % 5 !== 0) {
            testNum++;
        }

        // decide if grade is close enough to round, add the rounded 'testNum' if so
        if (testNum - grade <= 3) {
            response.push(testNum)
        } else {
            response.push(grade);
        }
    }); // end of forEach

    return response;
}
`

