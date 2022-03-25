import { ViewParams } from "./View";
declare class URIParser {
    match(uriParts: string[], pattern: string, params?: ViewParams): boolean;
    parse(uri: string, pattern: string, params: ViewParams): boolean;
}
declare const _default: URIParser;
export default _default;
//# sourceMappingURL=URIParser.d.ts.map