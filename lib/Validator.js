"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validator {
    notEmpty(value) {
        return typeof value === "string" && value.trim() !== "";
    }
    integer(value) {
        const str = String(value);
        return this.notEmpty(str) === true && str.match(/^(?:-?(?:0|[1-9][0-9]*))$/) !== null;
    }
}
exports.default = new Validator();
//# sourceMappingURL=Validator.js.map