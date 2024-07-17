while (true) {

    let heightMountain = 0;
    let targetMountain = 0; 

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); 

        if (mountainH > heightMountain) {
            heightMountain = mountainH;
            targetMountain = i;
        }
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log(targetMountain);
}