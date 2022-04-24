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

function getLetter(s) {
    let letter;
    // Write your code here
    let set1 = ['a', 'e', 'i', 'o', 'u']
    let set2 = ['b', 'c', 'd', 'f', 'g']
    let set3 = ['h', 'j', 'k', 'l', 'm']
    let set4 = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < set1.length; i++)
        if (s.charAt(0) == set1[i])
            letter = 'A'

    for (let i = 0; i < set2.length; i++)
        if (s.charAt(0) == set2[i])
            letter = 'B'

    for (let i = 0; i < set3.length; i++)
        if (s.charAt(0) == set3[i])
            letter = 'C'

    for (let i = 0; i < set4.length; i++)
        if (s.charAt(0) == set4[i])
            letter = 'D'

    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}