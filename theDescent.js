while (true) {

    let heightMountain = 0;
    let targetMountain = 0; 

    for (let i = 0; i < 8; i++) {
        const mountainHeigth = parseInt(readline()); 

        if (mountainHeigth > heightMountain) {
            heightMountain = mountainHeigth;
            targetMountain = i;
        }
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log(targetMountain);
}