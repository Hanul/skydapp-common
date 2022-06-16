"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkyDate {
    constructor(d = new Date()) {
        this.d = d;
    }
    get year() { return this.d.getFullYear(); }
    get month() { return this.d.getMonth() + 1; }
    get date() { return this.d.getDate(); }
    get day() { return this.d.getDay(); }
    get hours() { return this.d.getHours(); }
    get minutes() { return this.d.getMinutes(); }
    get seconds() { return this.d.getSeconds(); }
    get time() { return this.d.getTime(); }
    set year(year) { this.d.setFullYear(year); }
    set month(month) { this.d.setMonth(month - 1); }
    set date(date) { this.d.setDate(date); }
    set hours(hours) { this.d.setHours(hours); }
    set minutes(minutes) { this.d.setMinutes(minutes); }
    set seconds(seconds) { this.d.setSeconds(seconds); }
    get monthFormal() {
        const month = this.d.getMonth() + 1;
        return `${month < 10 ? 0 : ""}${month}`;
    }
    get dateFormal() {
        const date = this.d.getDate();
        return `${date < 10 ? 0 : ""}${date}`;
    }
    get hoursFormal() {
        const hours = this.d.getHours();
        return `${hours < 10 ? 0 : ""}${hours}`;
    }
    get minutesFormal() {
        const minutes = this.d.getMinutes();
        return `${minutes < 10 ? 0 : ""}${minutes}`;
    }
    get secondsFormal() {
        const seconds = this.d.getSeconds();
        return `${seconds < 10 ? 0 : ""}${seconds}`;
    }
}
exports.default = SkyDate;
//# sourceMappingURL=SkyDate.js.map