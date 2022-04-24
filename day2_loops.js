'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] == vowels[j])
                console.log(s[i])
        }
    }

    for (let i = 0; i < s.length; i++) {
        var flag = true
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] == vowels[j])
                flag = false
        }
        if (flag)
            console.log(s[i])
    }

}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}