const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let currentLetter = '';
    let decodedString = '';
    let currentCode = '';
    let currentSign = '';
    let stringLength = expr.length;
    let i= stringLength/10;
    let k=1;
    while (i-- > 0) {
        currentCode = expr.substr((stringLength-i-1)*10, 10);
        currentSign = currentCode.substr(8,2);
        while (currentSign != '00' && currentSign != '**' ) 
        {
            if (currentSign = '11') {
                currentLetter = '-' + currentLetter ;
            } else {
                currentLetter = '.' + currentLetter ;
            };
            ++k;
            currentSign = currentCode.substr(10-2*k,2);
        };
        decodedString += MORSE_TABLE [currentLetter];
        if (currentSign ='**') {decodedString += ' '};
        currentSign ='';
        currentLetter = '';
        k=1;
    };



    return decodedString;
}



module.exports = {
    decode
}