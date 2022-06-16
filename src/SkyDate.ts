export default class SkyDate {

    constructor(private d: Date = new Date()) { }

    public get year() { return this.d.getFullYear(); }
    public get month() { return this.d.getMonth() + 1; }
    public get date() { return this.d.getDate(); }
    public get day() { return this.d.getDay(); }
    public get hours() { return this.d.getHours(); }
    public get minutes() { return this.d.getMinutes(); }
    public get seconds() { return this.d.getSeconds(); }
    public get time() { return this.d.getTime(); }

    public set year(year: number) { this.d.setFullYear(year); }
    public set month(month: number) { this.d.setMonth(month - 1); }
    public set date(date: number) { this.d.setDate(date); }
    public set hours(hours: number) { this.d.setHours(hours); }
    public set minutes(minutes: number) { this.d.setMinutes(minutes); }
    public set seconds(seconds: number) { this.d.setSeconds(seconds); }

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
