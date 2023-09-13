'use strict';
{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
    const mediumCash = arr => {
        let result = 0;
        for (const i of arr) {
            result += i;
        }
        return console.log (`Средний чек за день: ${Math.floor(result / arr.length)} рублей`);
    }
    mediumCash(allСashbox);
}