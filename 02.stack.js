"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackClass = /** @class */ (function () {
    function StackClass(value, previousValue) {
        this.value = value;
        this.previousValue = previousValue;
    }
    StackClass.prototype.getTopValue = function () {
        return this.value;
    };
    StackClass.prototype.getPreviousValue = function () {
        return this.previousValue;
    };
    StackClass.prototype.pushNewValue = function (newTopValue) {
        if (this.value !== undefined) {
            this.previousValue = new StackClass(this.value, this.previousValue);
            this.value = newTopValue;
        }
        else {
            this.value = newTopValue;
        }
    };
    StackClass.prototype.popValue = function () {
        var _a, _b;
        var temp = this.value;
        if (this.value !== undefined) {
            this.value = (_a = this.previousValue) === null || _a === void 0 ? void 0 : _a.getTopValue();
            this.previousValue = (_b = this.previousValue) === null || _b === void 0 ? void 0 : _b.getPreviousValue();
            return temp;
        }
        else {
            return temp;
        }
    };
    return StackClass;
}());
// const stack1 = new StackClass<number>(1, undefined);
// console.log(stack1.getTopValue());
// stack1.pushNewValue(2);
// stack1.pushNewValue(3);
// stack1.pushNewValue(4);
// stack1.pushNewValue(5);
// console.log("Stack1 is: ", stack1);
// console.log(stack1.popValue());
// console.log("Stack1 is: ", stack1);
// console.log(stack1.popValue());
// console.log("Stack1 is: ", stack1);
// console.log(stack1.popValue());
// console.log("Stack1 is: ", stack1);
exports.default = StackClass;
