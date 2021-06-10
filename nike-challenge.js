const isShiny = (n) => {
    if (n < 10) {
        return true;
    } else {
        let lastDigit = n % 10;
        n = parseInt(n / 10)
        let secondToLastDigit = 0;
        while (n > 0) {
            secondToLastDigit = n % 10;
            if (secondToLastDigit > lastDigit)
                return false;
            else {
                n = parseInt(n / 10)
                lastDigit = secondToLastDigit
            }
        }
        return true
    }
}

const nextShiny = n => {
    let repeatLastDigit = false;
    let currNumber = 0;
    const digits = n.toString().split('').map(d => parseInt(d))
    let lastDigit = currNumber = digits.shift();
    while (digits.length) {
        let d = digits.shift()
        if (repeatLastDigit || lastDigit > d) {
            repeatLastDigit = true
            currNumber = currNumber * 10 + lastDigit
        } else {
            currNumber = currNumber * 10 + d;
            lastDigit = d;
        }
    }
    return currNumber
}

const getShinyNumbers = (n) => {
    const shinyArray = [];
    let currNumber = n
    while (shinyArray.length < 100) {
        if (!isShiny(currNumber)) {
            currNumber = nextShiny(currNumber)
            shinyArray.push(currNumber)
            currNumber++;
        } else {
            shinyArray.push(currNumber)
            currNumber++;
        }
    }
    return shinyArray;
}


const n = 0;
const shinyArray = getShinyNumbers(n);
console.log({ n, length: shinyArray.length, shinyArray })
