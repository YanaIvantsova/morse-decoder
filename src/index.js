const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let slicedTen = [], result = [];
    for (let i = 0; i < expr.length; i += 10) {
        let subArr = expr.slice(i, i + 10);
        slicedTen.push(subArr);
    }

    slicedTen.forEach((elem) => {

        let index = elem.indexOf('1')
        let slicedArr = elem.slice(index, elem.length);
        result.push(slicedArr);

    })
    console.log(result);

    let symbols = [];


    result.forEach((element) => {
        let substring = '';
        for (let j = 0; j < element.length; j += 2) {
            if (element.slice(j, j + 2) == '10') {
                substring += '.'
            } else if (element.slice(j, j + 2) == '11') {
                substring += '-'
            } else substring += ' ';
        }
        symbols.push(substring);
    });

    let summaryString = '';
    symbols.forEach((elem) => {
        summaryString += MORSE_TABLE[elem] || ' ';
    })
    return summaryString;
}

module.exports = {
    decode
}