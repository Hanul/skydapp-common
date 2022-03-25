"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventContainer_1 = __importDefault(require("../EventContainer"));
const SkyUtil_1 = __importDefault(require("../SkyUtil"));
const URIParser_1 = __importDefault(require("./URIParser"));
class SkyRouter extends EventContainer_1.default {
    constructor() {
        super();
        this.routes = [];
        this.openingViews = [];
        if (typeof window !== "undefined" && typeof window.document !== "undefined") {
            window.addEventListener("popstate", (event) => this.check(event.state === null ? {} : event.state));
        }
    }
    check(preParams) {
        const uri = decodeURIComponent(location.pathname.substring(1));
        const uriParts = uri.split("/");
        let viewCreated = false;
        for (const { patterns, excludes, viewType } of this.routes) {
            const params = preParams === undefined ? {} : Object.assign({}, preParams);
            const openingView = this.openingViews.find((ov) => ov instanceof viewType);
            if (patterns.find((pattern) => URIParser_1.default.match(uriParts, pattern, params)) !== undefined &&
                excludes.find((exclude) => URIParser_1.default.match(uriParts, exclude)) === undefined) {
                if (openingView === undefined) {
                    this.openingViews.push(new viewType(params, uri));
                    viewCreated = true;
                }
                else {
                    openingView.changeParams(params, uri);
                }
            }
            else if (openingView !== undefined) {
                openingView.close();
                SkyUtil_1.default.pull(this.openingViews, openingView);
            }
        }
        if (viewCreated === true) {
            this.fireEvent("go");
        }
    }
    route(patterns, viewType, excludes = []) {
        if (typeof patterns === "string") {
            patterns = [patterns];
        }
        this.routes.push({ patterns, excludes, viewType });
        const uri = decodeURIComponent(location.pathname.substring(1));
        const uriParts = uri.split("/");
        const params = {};
        if (patterns.find((pattern) => URIParser_1.default.match(uriParts, pattern, params)) !== undefined &&
            excludes.find((exclude) => URIParser_1.default.match(uriParts, exclude)) === undefined) {
            this.openingViews.push(new viewType(params, uri));
        }
    }
    go(uri, params) {
        if (location.pathname !== uri) {
            history.pushState(undefined, "", uri);
            this.check(params);
        }
    }
    goNoHistory(uri, params) {
        if (location.pathname !== uri) {
            history.replaceState(undefined, "", uri);
            this.check(params);
        }
    }
    waitAndGo(uri, params) {
        setTimeout(() => this.go(uri, params));
    }
    refresh() {
        for (const openingView of this.openingViews.reverse()) {
            openingView.close();
        }
        this.openingViews = [];
        const uri = decodeURIComponent(location.pathname.substring(1));
        const uriParts = uri.split("/");
        for (const { patterns, excludes, viewType } of this.routes) {
            const params = {};
            if (patterns.find((pattern) => URIParser_1.default.match(uriParts, pattern, params)) !== undefined &&
                excludes.find((exclude) => URIParser_1.default.match(uriParts, exclude)) === undefined) {
                this.openingViews.push(new viewType(params, uri));
            }
        }
    }
}
exports.default = new SkyRouter();
//# sourceMappingURL=SkyRouter.js.map