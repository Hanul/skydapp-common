import EventContainer from "../EventContainer";
import SkyUtil from "../SkyUtil";
import URIParser from "./URIParser";
import View, { ViewParams } from "./View";

type ViewType = new (...args: any[]) => View;

class SkyRouter extends EventContainer {

    private routes: {
        patterns: string[],
        excludes: string[],
        viewType: ViewType,
    }[] = [];

    private openingViews: View[] = [];

    constructor() {
        super();
        if (typeof window !== "undefined" && typeof window.document !== "undefined") {
            window.addEventListener("popstate", (event) => this.check(event.state === null ? {} : event.state));
        }
    }

    public check(preParams?: ViewParams) {

        const uri = decodeURIComponent(location.pathname.substring(1));
        const uriParts = uri.split("/");

        let viewCreated = false;

        for (const { patterns, excludes, viewType } of this.routes) {
            const params: ViewParams = preParams === undefined ? {} : Object.assign({}, preParams);
            const openingView = this.openingViews.find((ov) => ov instanceof viewType);
            if (
                patterns.find((pattern) => URIParser.match(uriParts, pattern, params)) !== undefined &&
                excludes.find((exclude) => URIParser.match(uriParts, exclude)) === undefined
            ) {
                if (openingView === undefined) {
                    this.openingViews.push(new viewType(params, uri));
                    viewCreated = true;
                } else {
                    openingView.changeParams(params, uri);
                }
            } else if (openingView !== undefined) {
                openingView.close();
                SkyUtil.pull(this.openingViews, openingView);
            }
        }

        if (viewCreated === true) {
            this.fireEvent("go");
        }
    }

    public route(patterns: string | string[], viewType: ViewType, excludes: string[] = []) {
        if (typeof patterns === "string") {
            patterns = [patterns];
        }
        this.routes.push({ patterns, excludes, viewType });

        const uri = decodeURIComponent(location.pathname.substring(1));
        const uriParts = uri.split("/");
        const params: ViewParams = {};
        if (
            patterns.find((pattern) => URIParser.match(uriParts, pattern, params)) !== undefined &&
            excludes.find((exclude) => URIParser.match(uriParts, exclude)) === undefined
        ) {
            this.openingViews.push(new viewType(params, uri));
        }
    }

    public go(uri: string, params?: ViewParams) {
        if (location.pathname !== uri) {
            history.pushState(undefined, "", uri);
            this.check(params);
        }
    }

    public goNoHistory(uri: string, params?: ViewParams) {
        if (location.pathname !== uri) {
            history.replaceState(undefined, "", uri);
            this.check(params);
        }
    }

    public waitAndGo(uri: string, params?: ViewParams) {
        setTimeout(() => this.go(uri, params));
    }

    public refresh() {

        for (const openingView of this.openingViews.reverse()) {
            openingView.close();
        }
        this.openingViews = [];

        const uri = decodeURIComponent(location.pathname.substring(1));
        const uriParts = uri.split("/");
        for (const { patterns, excludes, viewType } of this.routes) {
            const params: ViewParams = {};
            if (
                patterns.find((pattern) => URIParser.match(uriParts, pattern, params)) !== undefined &&
                excludes.find((exclude) => URIParser.match(uriParts, exclude)) === undefined
            ) {
                this.openingViews.push(new viewType(params, uri));
            }
        }
    }
}

export default new SkyRouter();
