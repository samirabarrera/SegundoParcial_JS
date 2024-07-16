const n = parseInt(readline());
const temps = readline().split(' ')

if (n === 0) {
    console.log(0);
} else {
    let closestTemp = null;
    
    temps.forEach(temp => {
        if (closestTemp === null || Math.abs(temp) < Math.abs(closestTemp) || (Math.abs(temp) === Math.abs(closestTemp) && temp > closestTemp)) {
            closestTemp = temp;
        }
    });
    console.log(closestTemp);
}
