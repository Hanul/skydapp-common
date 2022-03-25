"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URIParser {
    match(uriParts, pattern, params) {
        const patternParts = pattern.split("/");
        for (const [index, uriPart] of uriParts.entries()) {
            const patternPart = patternParts[index];
            if (patternPart === undefined) {
                return false;
            }
            else if (patternPart === "**") {
                return true;
            }
            if (uriPart !== "" && patternPart[0] === "{" && patternPart[patternPart.length - 1] === "}") {
                if (params !== undefined) {
                    params[patternPart.substring(1, patternPart.length - 1)] = uriPart;
                }
            }
            else if (patternPart !== "*" && patternPart !== uriPart) {
                return false;
            }
            if (index === uriParts.length - 1 && index < patternParts.length - 1 && patternParts[patternParts.length - 1] !== "") {
                return false;
            }
        }
        return true;
    }
    parse(uri, pattern, params) {
        const uriParts = uri.split(".")[0].split("/");
        return this.match(uriParts, pattern, params);
    }
}
exports.default = new URIParser();
//# sourceMappingURL=URIParser.js.map