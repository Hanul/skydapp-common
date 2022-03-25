"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkyUtil_1 = __importDefault(require("../../../SkyUtil"));
class Delay {
    constructor(parent, callback, ms) {
        this.parent = parent;
        this.callback = callback;
        this.ms = ms;
        this.after = 0;
        this.resume();
    }
    resume() {
        if (this.parent.delays.includes(this) !== true) {
            this.parent.delays.push(this);
        }
    }
    pause() {
        SkyUtil_1.default.pull(this.parent.delays, this);
    }
    delete() {
        this.pause();
    }
    step(deltaTime) {
        this.after += deltaTime;
        if (this.after >= this.ms) {
            this.callback();
            this.delete();
        }
    }
}
exports.default = Delay;
//# sourceMappingURL=Delay.js.map