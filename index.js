var fs = require('fs');
// const first = require('./database/1875.json');

// console.log(first[0]["04"][0]["10"][0].title);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

console.log(dd, mm, yyyy);

const randomYear = () => {
    return Math.floor(Math.random() * ((yyyy - 1) - 1875)) + 1875;
};
const randomDD = () => {
    return Math.floor(Math.random() * (28 - 1)) + 1;
};
const randomMM = () => {
    return Math.floor(Math.random() * (12 - 1)) + 1;
};

// console.log(randomYear());
// console.log(randomDD());
// console.log(randomMM());

// const getQuoteByYear = (start, end) => {
//     return array
//         .filter(i => i.year >= start && i.year <= end)
//         .sort((a, b) => (a.year > b.year ? 1 : b.year > a.year ? -1 : 0));
// };

const getOnlyOneRandomEvent = () => {
    let randomY = randomYear().toString();
    let randomDay = randomDD().toString();
    let randomMonth = randomMM().toString();
    let year = require('./database/' + randomY + '.json');
    // console.log(randomY, randomDay, randomMonth);
    // console.log(year[0][randomMonth]);
    if (year[0][randomMonth] == undefined) {
        console.log("undefined");
        return undefined;
    }
    if (year[0][randomMonth][0][randomDay] == undefined) {
        console.log("undefined Day");
        return undefined;
    }
    return year[0][randomMonth][0][randomDay][0];
};
console.log(getOnlyOneRandomEvent());

const getSomeRandom = count => {
    let randomQuotesArray = [];
    let randomQuotesSet = new Set(); // to prevent duplicate quotes
    while (randomQuotesArray.length < count) {
        let quote = array[randomNum()];
        if (!randomQuotesSet.has(quote)) {
            randomQuotesArray.push(quote);
        }
    }
    return randomQuotesArray;
};

// const getQuotesByObject = (quote, obj) => {
//     let resultArray = [];
//     quote = quote.toLowerCase();
//     object = obj;
//     array.forEach(item => {
//         item[object] = item[object].toLowerCase();
//         if (item[object] && item[object].includes(quote)) {
//             resultArray.push(item);
//         }
//     });

//     return resultArray;
// };

// const getQuotesByMovie = quote => {
//     return getQuotesByObject(quote, "movie");
// };

// const getQuotesByType = quote => {
//     return getQuotesByObject(quote, "type");
// };

// const getAll = () => {
//     return array;
// };

// module.exports = {
//     getAll,
//     getRandomQuote,
//     getSomeRandom,
//     getQuoteByYear,
//     getQuotesByMovie,
//     getQuotesByType
// };