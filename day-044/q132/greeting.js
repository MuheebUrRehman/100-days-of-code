"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.sayhello = function () {
        return "hello ".concat(this.name);
    };
    return Greeting;
}());
exports.Greeting = Greeting;
