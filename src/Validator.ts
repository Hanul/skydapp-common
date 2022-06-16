class Validator {

    public notEmpty(value: any) {
        return typeof value === "string" && value.trim() !== "";
    }

    public integer(value: any) {
        const str = String(value);
        return this.notEmpty(str) === true && str.match(/^(?:-?(?:0|[1-9][0-9]*))$/) !== null;
    }
}

export default new Validator();