"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Debouncer {
    constructor(debounceTime, work) {
        this.debounceTime = debounceTime;
        this.work = work;
    }
    run(...params) {
        if (this.debounceTimeout !== undefined) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.work(...params);
        }, this.debounceTime);
    }
}
exports.default = Debouncer;
//# sourceMappingURL=Debouncer.js.map