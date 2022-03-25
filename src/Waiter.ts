export default class Waiter<T = void> {

    public waiting = false;

    private resolves: ((value: T) => void)[] = [];
    private rejects: ((reason?: any) => void)[] = [];

    public async cheer(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.resolves.push(resolve);
            this.rejects.push(reject);
        });
    }

    public wait(): void {
        this.waiting = true;
    }

    public clear() {
        this.waiting = false;
        this.resolves = [];
        this.rejects = [];
    }

    public done(value: T): void {
        for (const resolve of this.resolves) {
            resolve(value);
        }
        this.clear();
    }

    public error(reason?: any): void {
        for (const reject of this.rejects) {
            reject(reason);
        }
        this.clear();
    }
}
