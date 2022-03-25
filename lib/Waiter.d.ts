export default class Waiter<T = void> {
    waiting: boolean;
    private resolves;
    private rejects;
    cheer(): Promise<T>;
    wait(): void;
    clear(): void;
    done(value: T): void;
    error(reason?: any): void;
}
//# sourceMappingURL=Waiter.d.ts.map