export default class Debouncer {
    private debounceTime;
    private work;
    private debounceTimeout;
    constructor(debounceTime: number, work: (...params: any) => void);
    run(...params: any): void;
}
//# sourceMappingURL=Debouncer.d.ts.map