import { ViewParams } from "./View";

class URIParser {

    public match(
        uriParts: string[],
        pattern: string,
        params?: ViewParams,
    ) {
        const patternParts = pattern.split("/");

        for (const [index, uriPart] of uriParts.entries()) {

            const patternPart = patternParts[index];

            if (patternPart === undefined) {
                return false;
            } else if (patternPart === "**") {
                return true;
            }

            // find params.
            if (uriPart !== "" && patternPart[0] === "{" && patternPart[patternPart.length - 1] === "}") {
                if (params !== undefined) {
                    params[patternPart.substring(1, patternPart.length - 1)] = uriPart;
                }
            } else if (patternPart !== "*" && patternPart !== uriPart) {
                return false;
            }

            if (index === uriParts.length - 1 && index < patternParts.length - 1 && patternParts[patternParts.length - 1] !== "") {
                return false;
            }
        }

        return true;
    }

    public parse(uri: string, pattern: string, params: ViewParams) {
        const uriParts = uri.split(".")[0].split("/");
        return this.match(uriParts, pattern, params);
    }
}

export default new URIParser();
