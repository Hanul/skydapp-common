export default class SkyDate {
    private d;
    constructor(d?: Date);
    get year(): number;
    get month(): number;
    get date(): number;
    get day(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    get time(): number;
    set year(year: number);
    set month(month: number);
    set date(date: number);
    set hours(hours: number);
    set minutes(minutes: number);
    set seconds(seconds: number);
    get monthFormal(): string;
    get dateFormal(): string;
    get hoursFormal(): string;
    get minutesFormal(): string;
    get secondsFormal(): string;
}
//# sourceMappingURL=SkyDate.d.ts.map