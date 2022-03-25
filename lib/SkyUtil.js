"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkyUtil {
    static pull(array, ...removeList) {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }
    static insert(array, index, item) {
        array.splice(index, 0, item);
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static repeat(times, func) {
        for (let i = 0; i < times; i += 1) {
            if (func(i) === false) {
                break;
            }
        }
    }
    static repeatResult(times, func) {
        const results = [];
        for (let i = 0; i < times; i += 1) {
            results.push(func(i));
        }
        return results;
    }
    static async repeatResultAsync(times, func) {
        const results = [];
        for (let i = 0; i < times; i += 1) {
            results.push(await func(i));
        }
        return results;
    }
}
exports.default = SkyUtil;
//# sourceMappingURL=SkyUtil.js.map