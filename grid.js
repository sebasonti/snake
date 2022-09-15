const GRID_SIZE = 21;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}

export function outOfGrid(position) {
    return (
        position.x < 1 || position.y < 1 ||
        position.x > GRID_SIZE || position.y > GRID_SIZE
    );
}