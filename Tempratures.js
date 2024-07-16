let inputLines = ["14 100 29 -71 82 48 39 -101 22 -46 17 3 -20 25 -10"];
let currentLine = 0;

function readTemp() {
    return inputLines[currentLine++];
}

const n = parseInt(readTemp()); 
var inputs = readTemp().split(''); 

if (n === 0) {
    console.log("0");
} else {
    let closestTemp = null;

    temps.forEach(temp => {
        if (closestTemp === null || Math.abs(temp) < Math.abs(closest) || (Math.abs(temp) === Math.abs(closest) && temp > closest)) {
            closestTemp = temp;
        }
    });
    console.log(closestTemp);
}
