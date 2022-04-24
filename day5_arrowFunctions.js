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
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let returnArray = []

    // for each element temp = nums[i] 
    for (const temp of nums) {
        if (temp % 2 == 0)
            returnArray.push(temp * 2)
        else
            returnArray.push(temp * 3)
    }

    return returnArray
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
}