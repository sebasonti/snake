import { growSnake, onSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getFoodPosition();
const GROWTH_RATE = 3;

export function update() {
    if (onSnake(food)) {
        growSnake(GROWTH_RATE);
        food = getFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getFoodPosition() {
    let foodPosition;
    while (foodPosition == null || onSnake(foodPosition)) {
        foodPosition = randomGridPosition();
    }
    return foodPosition;
}