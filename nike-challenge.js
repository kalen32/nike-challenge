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
