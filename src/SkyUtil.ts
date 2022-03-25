export default class SkyUtil {

    public static pull(array: any[], ...removeList: any[]): void {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }

    public static insert(array: any[], index: number, item: any): void {
        array.splice(index, 0, item);
    }

    public static random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static repeat(times: number, func: (index: number) => void | boolean) {
        for (let i = 0; i < times; i += 1) {
            if (func(i) === false) {
                break;
            }
        }
    }

    public static repeatResult(times: number, func: (index: number) => any) {
        const results: any[] = [];
        for (let i = 0; i < times; i += 1) {
            results.push(func(i));
        }
        return results;
    }

    public static async repeatResultAsync(times: number, func: (index: number) => Promise<any>): Promise<any[]> {
        const results: any[] = [];
        for (let i = 0; i < times; i += 1) {
            results.push(await func(i));
        }
        return results;
    }
}
