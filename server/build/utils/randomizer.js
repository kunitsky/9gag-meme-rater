"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = (range) => Math.floor(Math.random() * range);
function getRandomNumbers(range) {
    let numbers = [exports.random(range)];
    let randomNumber = exports.random(range);
    while (randomNumber === numbers[0]) {
        randomNumber = exports.random(range);
    }
    numbers[1] = randomNumber;
    return numbers;
}
exports.getRandomNumbers = getRandomNumbers;
//# sourceMappingURL=randomizer.js.map