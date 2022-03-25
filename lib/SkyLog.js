"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkyDate_1 = __importDefault(require("./SkyDate"));
class SkyLog {
    static get time() {
        const time = new SkyDate_1.default();
        return `${time.monthFormal}-${time.dateFormal} ${time.hoursFormal}:${time.minutesFormal}`;
    }
    static success(message) {
        console.log(`[32m[${this.time}] ${message}[0m`);
    }
    static warning(message) {
        console.log(`[33m[${this.time}] ${message}[0m`);
        console.trace();
    }
    static error(message, parameters) {
        console.log(`[31m[${this.time}] ${message}[0m`, parameters === undefined ? "" : parameters);
        console.trace();
    }
}
exports.default = SkyLog;
//# sourceMappingURL=SkyLog.js.map