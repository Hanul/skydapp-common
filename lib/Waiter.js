"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Waiter {
    constructor() {
        this.waiting = false;
        this.resolves = [];
        this.rejects = [];
    }
    async cheer() {
        return new Promise((resolve, reject) => {
            this.resolves.push(resolve);
            this.rejects.push(reject);
        });
    }
    wait() {
        this.waiting = true;
    }
    clear() {
        this.waiting = false;
        this.resolves = [];
        this.rejects = [];
    }
    done(value) {
        for (const resolve of this.resolves) {
            resolve(value);
        }
        this.clear();
    }
    error(reason) {
        for (const reject of this.rejects) {
            reject(reason);
        }
        this.clear();
    }
}
exports.default = Waiter;
//# sourceMappingURL=Waiter.js.map