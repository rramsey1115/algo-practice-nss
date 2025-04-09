
export const numPalAlgo = (digits) => {
    // result obj return - info needed for UI
    let res = { number1: 0, number2: 0, palindrome: 0 };

    // check that digits is within UI-provided range before moving on
    if (digits < 2 || digits > 5) {
        return res;
    }

    // variables which will be multiplied added together to find product
    let num1 = 0;
    let num2 = 0;
    let product = 0;

    // if 1 digit start at 9, 2 digits 99, 3 => 999 - if none return default res obj
    switch (digits) {
        case 2:
            num1 = 99;
            num2 = 99;
            break;
        case 3:
            num1 = 999;
            num2 = 999;
            break;
        case 4:
            num1 = 9999;
            num2 = 9999;
            break;
        case 5:
            num1 = 99999;
            num2 = 99999;
            break;
        default:
            return res;
    }

    // will return true or false to let later function know to return product or not
    const isPalindrome = (num) => {
        // turn number into string for altering and comparing
        const numStr = String(num);

        // take string, split into array, then reverse,then then join
        // generates the original num reversed but in string format
        const reversedNum = numStr.split("").reverse().join("");

        // return true or false value of comparison
        return numStr == reversedNum
    }

    // start at highest possible num combination, nested loop to decrease from top down
    // if isPalindrome(product) returns true, set res and return it to user
    for (let i = num1; i > 0; i--) {
        for (let j = num2; j > 0; j--) {
            product = (i * j);

            if (product <= res.palindrome) {
                break;  // No point in continuing with smaller products
            }

            if (isPalindrome(product) == true) {
                // if palindrome is found, see if it is larger than previous largest in the res obj
                if (product > res.palindrome) {
                    res.number1 = i;
                    res.number2 = j;
                    res.palindrome = product;
                }
            }
        }
        // early break out of outer loop if largest possible outcome is still not greater than palindrome
        if (i * 1 <= res.palindrome) {
            break;
        }
    }

    // if no palindrome found, return original res - empty object
    return res;
}

export const numPalAlgoString = `
const numPalAlgo = (digits) => {
    // result obj return - info needed for UI
    let res = { number1: 0, number2: 0, palindrome: 0 };

    // check that digits is within UI-provided range before moving on
    if (digits < 2 || digits > 5) {
        return res;
    }

    // variables which will be multiplied added together to find product
    let num1 = 0;
    let num2 = 0;
    let product = 0;

    // if 1 digit start at 9, 2 digits 99, 3 => 999 - if none return default res obj
    switch (digits) {
        case 2:
            num1 = 99;
            num2 = 99;
            break;
        case 3:
            num1 = 999;
            num2 = 999;
            break;
        case 4:
            num1 = 9999;
            num2 = 9999;
            break;
        case 5:
            num1 = 99999;
            num2 = 99999;
            break;
        default:
            return res;
    }

    // will return true or false to let later function know to return product or not
    const isPalindrome = (num) => {
        // turn number into string for altering and comparing
        const numStr = String(num);

        // take string, split into array, then reverse,then then join
        // generates the original num reversed but in string format
        const reversedNum = numStr.split("").reverse().join("");

        // return true or false value of comparison
        return numStr == reversedNum
    }

    // start at highest possible num combination, nested loop to decrease from top down
    // if isPalindrome(product) returns true, set res and return it to user
    for (let i = num1; i > 0; i--) {
        for (let j = num2; j > 0; j--) {
            product = (i * j);

            if (product <= res.palindrome) {
                break;  // No point in continuing with smaller products
            }

            if (isPalindrome(product) == true) {
                // if palindrome is found, see if it is larger than previous largest in the res obj
                if (product > res.palindrome) {
                    res.number1 = i;
                    res.number2 = j;
                    res.palindrome = product;
                }
            }
        }
        // early break out of outer loop if largest possible outcome is still not greater than palindrome
        if (i * 1 <= res.palindrome) {
            break;
        }
    }

    // if no palindrome found, return original res - empty object
    return res;
}
`