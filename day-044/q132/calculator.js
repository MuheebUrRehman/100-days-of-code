"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.num1 = 2;
        this.num2 = 4;
    }
    Calculator.prototype.addition = function () {
        return this.num1 + this.num2;
    };
    return Calculator;
}());
exports.default = Calculator;
