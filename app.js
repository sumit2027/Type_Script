"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 4;
//tsc  --watch
console.log(a);
function add(x, y) {
    return x + y;
}
add(5, 6);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
//# sourceMappingURL=app.js.map