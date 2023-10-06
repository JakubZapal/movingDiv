const movingDiv = document.getElementById("movingDiv");
let marginBottom = 0
let marginRight = 0
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case 'KeyW':
            marginBottom += 10;
            movingDiv.style.marginBottom = marginBottom + 'px'
            break;
        case 'KeyS':
            marginBottom -= 10;
            movingDiv.style.marginBottom = marginBottom + 'px';
            break;
        case 'KeyA':
            marginRight += 10;
            movingDiv.style.marginRight = marginRight + 'px'
            break;
        case 'KeyD':
            marginRight -= 10
            movingDiv.style.marginRight = marginRight + 'px'
            break;
    }
})