/* 
    Write code to return the first 100 shiny numbers greater than n.  A shiny number is a number where each base-10 digit (from left to right) is ≤ the next digit

        Shiny: 123, 499, 111, 0, 246888

        Not Shiny: 1231, 21, 63

    Please document any assumptions.



    Assumptions:
    - solution is fixed for the first 100
    - shiny numbers are natural numbers including the 0
    - the first shiny numbers < 100 can be considered the base for the shiny ("shiny base") numbers and can be obtained by brute force.    
    - knowing the shiny base the rest of the shiny numbers can be easily deducted (just like we naturally do with base-10)    
    


    Shiny-Base :

    0
    1   11
    2   12  22
    3   13      33
    4    .          44
    5    .              55
    6    .                  66
    7    .                      77 
    8    .                          88
    9    19  .  .  .  .  .  69  79  89   99

 */

const getShinyBaseDigitsFor = (x) => {
    const rtnDigits = [];
    for (let i = x * 11; i < (x + 1) * 10; i++) {
        rtnDigits.push(i)
    }
    return rtnDigits;
}


const getShinyNumbers = () => {
    const n = 100;
    const shinyHash = {}

    let shinyCount = 0;
    let currDigit = 0;

    // get base-shiny
    while (shinyCount < n) {
        if (currDigit < 10) {
            const nextDigits = getShinyBaseDigitsFor(currDigit)
            shinyHash[currDigit] = nextDigits;
            shinyCount += nextDigits.length
            currDigit++
        } else {
            break;
        }
    }

    // deduce the rest
    currDigit = 1
    while (shinyCount < n) {
        const nextDigits = shinyHash[currDigit].map(r => r + (currDigit * 100))
        if (shinyCount + nextDigits.length <= n) {
            shinyHash[currDigit * 10] = nextDigits;
            shinyCount += nextDigits.length;
            currDigit++
        } else {
            shinyHash[currDigit * 10] = nextDigits.slice(0, n - (shinyCount + nextDigits.length))
            break;
        }
    }

    return Object.values(shinyHash).flat(1).sort((a, b) => a - b);
}


const shinyArray = getShinyNumbers();
console.log(shinyArray)
