/*  
added complexity from OG challenge - accept the 2 numbers to be the mutiples of... plus the range of numbers to check
num1 - first multipe of to check
num2 - second multiple of to check
range - start from zero and go up to, but not equal to, given range variable
*/

export const sumOfMultiplesAlgo = (num1, num2, range) => {
    let sum = 0;
    // iterate from 1 to range (not inclusive)
    for (let i = 1; i < range; i++) {
        // check if current number within given range is divisible by either given num
        // if either case true - add current index to sum
        (i % num1 == 0 || i % num2 == 0) && (sum += i);
    }
    // after loop executes, return sum
    return sum;
}

/*
console.log to check for accuracy
this should resolve to 23 according to instructions
console.log(sumOfMultiplesAlgo(3, 5, 10)); 
*/


// code string which is imported to the view JSX file to display to user
export const sumMultiplesCodeString = `
const sumOfMultiplesAlgo = (num1, num2, range) => {
    let sum = 0;
    // iterate from 1 to range (not inclusive)
    for (let i = 1; i < range; i++) {
        // check if current number within given range is divisible by either given num
        // if either case true - add current index to sum
        (i % num1 == 0 || i % num2 == 0) && (sum += i);
    }
    // after loop executes, return sum
    return sum;
}
`
