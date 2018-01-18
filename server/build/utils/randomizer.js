"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomNumbers() {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    if (number1 === number2) {
        number2 = Math.floor(Math.random() * 10);
    }
    return { number1: number1, number2: number2 };
}
exports.getRandomNumbers = getRandomNumbers;
//# sourceMappingURL=randomizer.js.map