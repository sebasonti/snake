let inputDirection = { x: 0, y: 0 };
let lastInputDiretion = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDiretion.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDiretion.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDiretion.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDiretion.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
        case ' ':
            inputDirection = { x: 0, y: 0 };
            break;
        default:
            break;
    }
});

export function getDirection() {
    lastInputDiretion = inputDirection;
    return inputDirection;
}