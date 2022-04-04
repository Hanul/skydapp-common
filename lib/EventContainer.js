"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkyUtil_1 = __importDefault(require("./SkyUtil"));
class EventContainer {
    constructor() {
        this.eventMap = {};
        this.deleted = false;
    }
    on(eventName, eventHandler) {
        if (this.eventMap[eventName] === undefined) {
            this.eventMap[eventName] = [];
        }
        this.eventMap[eventName].push(eventHandler);
    }
    toss(eventName, to, toEventName) {
        this.on(eventName, async (...params) => {
            return await to.fireEvent(toEventName === undefined ? eventName : toEventName, ...params);
        });
    }
    off(eventName, eventHandler) {
        if (this.eventMap[eventName] !== undefined) {
            SkyUtil_1.default.pull(this.eventMap[eventName], eventHandler);
            if (this.eventMap[eventName].length === 0) {
                delete this.eventMap[eventName];
            }
        }
    }
    async fireEvent(eventName, ...params) {
        const results = [];
        const promises = [];
        if (this.eventMap[eventName] !== undefined) {
            for (const eventHandler of this.eventMap[eventName]) {
                const result = eventHandler(...params);
                if (result instanceof Promise) {
                    promises.push(result);
                }
                else {
                    results.push(result);
                }
            }
        }
        return results.concat(await Promise.all(promises));
    }
    delete() {
        this.fireEvent("delete");
        this.eventMap = undefined;
        this.deleted = true;
    }
}
exports.default = EventContainer;
//# sourceMappingURL=EventContainer.js.map