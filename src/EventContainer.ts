import SkyUtil from "./SkyUtil";

export type EventHandler = (...params: any[]) => any;

export default abstract class EventContainer {

    private eventMap: { [eventName: string]: EventHandler[] } = {};
    public deleted = false;

    public on(eventName: string, eventHandler: EventHandler) {
        if (this.eventMap[eventName] === undefined) {
            this.eventMap[eventName] = [];
        }
        this.eventMap[eventName].push(eventHandler);
    }

    public toss(eventName: string, to: EventContainer, toEventName?: string) {
        this.on(eventName, async (...params) => {
            return await to.fireEvent(toEventName === undefined ? eventName : toEventName, ...params);
        });
    }

    public off(eventName: string, eventHandler: EventHandler) {
        if (this.eventMap[eventName] !== undefined) {
            SkyUtil.pull(this.eventMap[eventName], eventHandler);
            if (this.eventMap[eventName].length === 0) {
                delete this.eventMap[eventName];
            }
        }
    }

    public async fireEvent(eventName: string, ...params: any[]): Promise<any[]> {
        const results: any[] = [];
        const promises: Promise<void>[] = [];
        if (this.eventMap[eventName] !== undefined) {
            for (const eventHandler of this.eventMap[eventName]) {
                const result = eventHandler(...params);
                if (result instanceof Promise) {
                    promises.push(result);
                } else {
                    results.push(result);
                }
            }
        }
        return results.concat(await Promise.all(promises));
    }

    public delete() {
        this.fireEvent("delete");
        (this.eventMap as unknown) = undefined;
        this.deleted = true;
    }
}
