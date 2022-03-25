export declare type EventHandler = (...params: any[]) => any;
export default abstract class EventContainer {
    private eventMap;
    deleted: boolean;
    on(eventName: string, eventHandler: EventHandler): void;
    toss(eventName: string, to: EventContainer, toEventName?: string): void;
    off(eventName: string, eventHandler: EventHandler): void;
    fireEvent(eventName: string, ...params: any[]): Promise<any[]>;
    delete(): void;
}
//# sourceMappingURL=EventContainer.d.ts.map