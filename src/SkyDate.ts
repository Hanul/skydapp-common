export default class SkyDate {

    constructor(private d: Date = new Date()) { }

    public get year() { return this.d.getFullYear(); }
    public get month() { return this.d.getMonth() + 1; }
    public get date() { return this.d.getDate(); }
    public get day() { return this.d.getDay(); }
    public get hours() { return this.d.getHours(); }
    public get minutes() { return this.d.getMinutes(); }
    public get seconds() { return this.d.getSeconds(); }

    public get monthFormal() {
        const month = this.d.getMonth() + 1;
        return `${month < 10 ? 0 : ""}${month}`;
    }

    public get dateFormal() {
        const date = this.d.getDate();
        return `${date < 10 ? 0 : ""}${date}`;
    }

    public get hoursFormal() {
        const hours = this.d.getHours();
        return `${hours < 10 ? 0 : ""}${hours}`;
    }

    public get minutesFormal() {
        const minutes = this.d.getMinutes();
        return `${minutes < 10 ? 0 : ""}${minutes}`;
    }

    public get secondsFormal() {
        const seconds = this.d.getSeconds();
        return `${seconds < 10 ? 0 : ""}${seconds}`;
    }
}
