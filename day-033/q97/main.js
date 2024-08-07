"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formattedDate() {
    const now = new Date();
    const date = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${date}-${month}-${year}`;
}
console.log(formattedDate());
