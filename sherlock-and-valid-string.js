'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the isValid function below.

    function isValid(s) {

        let counter = {};
        let freq = {};

        Array.from(s).forEach(char => {
            counter[char] = counter[char] || 0;
            counter[char]++;
        })


        Object.keys(counter).forEach(k => {
            freq[counter[k]] = freq[counter[k]] || 0;
            freq[counter[k]]++;
        })

        let freqArr = Object.keys(freq).map(Number);

        if (freqArr.length === 1) {
            return 'YES'
        }




        let twoFrequencies = freqArr.length === 2;
        let [a, b] = freqArr;


        let oneOccurence = freq[a] === 1 || freq[b] === 1;


        let singleton = (freq[a] === 1 && a === 1) || (freq[b] === 1 && b === 1)


        let diffOfOne = (freq[a] === 1 ? a - b : b - a) === 1;


        if ((singleton || diffOfOne) && twoFrequencies && oneOccurence) {
            return 'YES'
        }

        return 'NO'
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
