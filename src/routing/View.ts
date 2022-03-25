export interface ViewParams {
    [name: string]: string | undefined;
}

export default interface View {
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
