'use strict';

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let b = 1;
    for (let d = 0; d < n; d++){
        let a = BigInt(n) - BigInt(d);
        b = BigInt(b) * a;
    }
    let c = BigInt(b).toString();
    console.log(c);
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
