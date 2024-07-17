const n = parseInt(readline()); 
const inputs = readline().split(' ').map(Number);

function closest(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let closest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        if (Math.abs(temp) < Math.abs(closest) || (Math.abs(temp) === Math.abs(closest) && temp > closest)) {
            closest = temp;
        }
    }
    return closest;
}
const result = closest(inputs);
console.log(result); 
