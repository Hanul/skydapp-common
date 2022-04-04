export default class Debouncer {

    private debounceTimeout: any | undefined;

    constructor(
        private debounceTime: number,
        private work: (...params: any) => void,
    ) { }

    public run(...params: any) {
        if (this.debounceTimeout !== undefined) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.work(...params);
        }, this.debounceTime);
    }
}
