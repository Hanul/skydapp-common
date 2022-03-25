export default class Debouncer {

    private debounceTimeout: any | undefined;

    constructor(
        private debounceTime: number,
        private work: () => void,
    ) { }

    public run() {
        if (this.debounceTimeout !== undefined) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.work();
        }, this.debounceTime);
    }
}
