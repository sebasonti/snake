import { getDirection } from './input.js';

export const SNAKE_SPEED = 5;

const snakeBody = [{ x: 11, y: 11 }];

let newSegments = 0;

export function update() {
    const direction = getDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += direction.x;
    snakeBody[0].y += direction.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

export function growSnake(amount) {
    newSegments += amount;
    addSegments();
}

export function onSnake(position, { ignoreHead } = { ignoreHead: false }) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return segment.x === position.x && segment.y === position.y;
    });
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake({ ignoreHead: true });
}
